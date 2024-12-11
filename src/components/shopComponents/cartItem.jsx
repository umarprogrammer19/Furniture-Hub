import React, { useEffect } from "react";
import { useCart } from "@/data/useCartStore";
import { XCircle } from "lucide-react";


const CartItem = ({product}) => {

  const { deleteFromCart } = useCart();
if (!product) return null;
  return (
    <div className="flex items-center w-full justify-between">
      <img
        src={product.imageUrl}
        alt="smallPhotos"
        width={100}
        height={100}
        className=" rounded-xl"
      />
      <div>
        <p className="text-black text-base font-normal">{product.title}</p>
        <div className="flex items-center gap-4 justify-start">
          <p className="text-black text-base font-light">{product.amount}</p>
          <p className="text-black text-base font-light">x</p>
          <p className="text-[#B88E2F] text-xs font-medium">Rs. {product.price}.00</p>
        </div>
      </div>
      <XCircle color="black" onClick={() => deleteFromCart(product)} />
    </div>
  );
};

export default CartItem;
