import React from "react";
import { useCart } from "@/data/useCartStore";
import { XCircle } from "lucide-react";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const { deleteFromCart } = useCart();

  if (!product) return null;

  const handleDeleteClick = () => {
    try {
      deleteFromCart(product); // Delete the item from cart
      toast.success(`${product.title} has been removed from your cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("An error occurred while removing the item.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="flex items-center w-full justify-between">
      <img
        src={product.imageUrl}
        alt="smallPhotos"
        width={100}
        height={100}
        className="rounded-xl"
      />
      <div>
        <p className="text-black text-base font-normal">{product.title}</p>
        <div className="flex items-center gap-4 justify-start">
          <p className="text-black text-base font-light">{product.amount}</p>
          <p className="text-black text-base font-light">x</p>
          <p className="text-[#B88E2F] text-xs font-medium">Rs. {product.price}.00</p>
        </div>
      </div>
      <XCircle color="black" onClick={handleDeleteClick} />
    </div>
  );
};

export default CartItem;
