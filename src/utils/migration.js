import { client } from "@/sanity/lib/client";

export const fetchData = async () => {
    
    try {
        const res = await fetch("https://template-0-beta.vercel.app/api/product");

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        const products = await res.json();

        for (const {
            name,
            imagePath,
            price,
            description,
            discountPercentage,
            isFeaturedProduct,
            stockLevel,
            category,
        } of products) {
            try {
                const imageAsset = await upload(imagePath);

                if (!imageAsset) {
                    console.warn(`Failed to upload image for product: ${name}`);
                    continue;
                }

                await client.create({
                    _type: "product",
                    name,
                    description,
                    price,
                    discountPercentage,
                    imageUrl: {
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: imageAsset._id,
                        },
                    },
                    isFeaturedProduct,
                    stockLevel,
                    category
                });

                console.log("Migrated Product:", name);
            } catch (err) {
                if (err)
                    console.error(`Failed to migrate product: ${name}`);
            }
        }
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
};

const upload = async (image) => {
    try {
        const res = await fetch(image);

        if (!res.ok) {
            console.warn(`Failed to fetch image: ${image}`);
            return null;
        }

        const contentType = res.headers.get("content-type") || "image/jpeg";

        const imageAsset = await client.assets.upload("image", await res.blob(), {
            filename: image.split("/").pop() || "image",
            contentType,
        });

        return imageAsset;
    } catch (error) {
        console.error("Error in upload:", error);
        return null;
    }
};

fetchData();