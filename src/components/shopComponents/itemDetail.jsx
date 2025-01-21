import { client } from "@/sanity/lib/client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import arrow from "../../../public/assets/arrowImage.svg";
import fullStar from "../../../public/assets/fullStar.svg";
import halfStar from "../../../public/assets/halfStar.svg";
import Footer from "../authComponents/authFooter/authFooter";
import TopPicks from "../homeComponents/topPicks";
import Navbar from "../navbar";
import CartPopup from "./cartPopup";
import ColorSelector from "./colorSelector";
import ItemCart from "./itemCart";
import ItemDescription from "./itemDescription";
import ItemSku from "./itemSku";
import SizeChoise from "./sizeChoise";

const query = `*[_type == "product"]{
  _id,
  name,
  "imageUrl": imageUrl.asset->url,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,
}`;

const ItemDetail = ({ itemID }) => {
  const router = useRouter();
  const id = router.query;

  const [product, setProduct] = useState();
  const [isShown, setIsShown] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        const pro = await client.fetch(query);
        const index = pro.findIndex((item) => item._id == id.itemID);
        const oneProduct = pro[index]
        setProduct(oneProduct)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [id.itemID]);

  function toggleShown() {
    setIsShown(!isShown);
  }

  if (!product) return <h1>Loading....</h1>


  return (
    <div className="bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm lg:text-base mb-5 px-4 lg:px-32 bg-white">
        <Link href={"/"} className="text-black">
          Home
        </Link>
        <Image src={arrow} alt="arrow" width={16} height={16} />
        <Link href={"/shop"} className="text-black">
          Shop
        </Link>
        <Image src={arrow} alt="arrow" width={16} height={16} />
        <p className="text-black text-sm lg:text-base font-normal truncate">
          {product.name}
        </p>
      </div>

      {/* Main Section */}
      {product && <section className="flex flex-col lg:flex-row gap-8 px-4 lg:px-32 py-8">
        {/* Small Images */}
        <div className="flex lg:flex-col gap-4">
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl"
          />
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            className="w-full h-72 lg:h-[600px] rounded-2xl object-cover"
            src={product.imageUrl}
            alt="Item"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4 lg:pl-8">
          <h2 className="text-black text-2xl lg:text-4xl font-normal">
            {product.name}
          </h2>
          <div className="flex items-center justify-between">
            <h4 className="text-[#9F9F9F] text-xl lg:text-2xl font-medium">
              Rs. {product.price}.00
            </h4>
            <Heart color="red" size={25} />
          </div>
          <div className="flex items-center gap-4">
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={halfStar} alt="star" width={20} height={20} />
            <div className="hidden lg:block h-8 border border-[#9F9F9F]"></div>
            <h5 className="text-[#9F9F9F] font-normal text-xs lg:text-sm">
              5 Customer Review
            </h5>
          </div>
          <p className="text-black text-sm lg:text-base font-normal">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h5 className="text-[#9F9F9F] text-sm lg:text-base font-normal mt-4">
            Size
          </h5>
          <SizeChoise />
          <h5 className="text-[#9F9F9F] text-sm lg:text-base font-normal mt-4">
            Color
          </h5>
          <ColorSelector />
          <ItemCart handleFunction={toggleShown} product={product} />
          <div className="w-full mt-8 border border-[#9F9F9F]"></div>
          <ItemSku />
        </div>
      </section>}

      {/* Divider */}
      <div className="w-full border border-[#FFFFFF] my-4"></div>

      {/* Description and Related Products */}
      <ItemDescription />
      <TopPicks title={"Related Products"} />

      {/* Footer */}
      <Footer />
      <div className="flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-full lg:w-9/12 h-0.5 flex my-12"></div>
        <p className="text-black text-sm lg:text-base font-normal mb-8">
          2022 Meubel House. All rights reserved
        </p>
      </div>

      {/* Cart Popup */}
      {isShown && <CartPopup product={product} closeFunction={toggleShown} />}
    </div>
  );
};

export default ItemDetail;
