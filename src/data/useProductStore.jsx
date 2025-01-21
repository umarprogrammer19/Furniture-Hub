import { create } from "zustand";
import { client } from "@/sanity/lib/client";

const query = `*[_type == "product"]{
  name,
  "imageUrl": image.asset->url,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,
}`;

// Function to fetch products from Sanity
const fetchProducts = async () => {
  try {
    const res = await client.fetch(query);
    return res || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Zustand store with loading and error states
export const useProducts = create((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchAndSetProducts: async () => {
    set({ loading: true, error: null }); // Set loading state
    try {
      const products = await fetchProducts();
      set({ products, loading: false }); // Set products and stop loading
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false }); // Set error and stop loading
    }
  },
}));
