import React from "react";
import { useCart } from "@/data/useCartStore";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify"; // Make sure you import toast

const CartItem = ({ item }) => {
  const { deleteFromCart } = useCart();

  // Function to handle the delete action and show toast
  const handleDelete = () => {
    try {
      deleteFromCart(item); // Call the delete function from cart
      toast.success(`${item.title} has been removed from your cart!`, {
        position: toast.POSITION.TOP_RIGHT,
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
    <div className="flex gap-9 items-center mt-16">
      <img
        src={item.imageUrl}
        alt="smallPhotos"
        width={100}
        height={100}
        className="rounded-xl"
      />
      <p className="text-[#9F9F9F] text-base font-normal mr-4 w-44">{item.title}</p>
      <p className="text-[#9F9F9F] text-base font-normal mr-20">{item.price}</p>
      <p className="text-black w-8 h-8 border border-[#9F9F9F] rounded-md items-center justify-center flex mr-5">
        {item.amount}
      </p>
      <p className="text-black text-base font-normal mr-8">{item.price}</p>
      <Trash2 color="#FBEBB5" onClick={handleDelete} />
    </div>
  );
};

export default CartItem;
