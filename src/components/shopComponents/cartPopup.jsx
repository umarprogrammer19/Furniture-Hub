import React, { useState } from "react";
import Image from "next/image";
import Close from "../../../public/assets/closeCart.svg";
import Link from "next/link";
import { useCart } from "@/data/useCartStore";
import CartItem from "./cartItem";

const CartPopup = ({closeFunction }) => {
  const { cart } = useCart();

  function toggleBodyScroll() {
    /*
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
    */
  }

  return (
    <>
      <div className="absolute z-40 inset-0 bg-black/20"></div>
      <div className="flex flex-col items-start justify-between p-8 w-[26rem] h-[46rem] absolute top-0 right-0 z-50 bg-white">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black text-2xl font-semibold">Shopping Cart</h3>
            <Image
              src={Close}
              width={20}
              height={20}
              onClick={() => closeFunction()}
              className="cursor-pointer"
            />
          </div>
          <div className="bg-[#D9D9D9] w-[19rem] h-0.5 items-center justify-center flex my-12"></div>
          {/*CART ITEMS */}
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div>
          11
          <div className="flex item-center justify-between">
            <p className="text-black text-base font-normal">Subtotal</p>
            <p className="text-[#B88E2F] text-base font-semibold">
              {cart.length === 0 ? null : (
                <p>
                  {cart
                    .reduce((acc, item) => acc + item.amount * item.price, 0)
                    .toFixed(2)}
                </p>
              )}
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-0.5 items-center justify-center flex my-8"></div>
          <div className="flex items-center justify-around gap-4">
            <Link href={"/cart"}>
              <button
                className="bg-white text-black py-2 px-10 rounded-3xl border border-black cursor-pointer text-xl font-normal"
                onClick={toggleBodyScroll}
              >
                View Cart
              </button>
            </Link>
            <Link href={"/checkout"}>
              <button
                className="bg-white text-black py-2 px-10 rounded-3xl border border-black cursor-pointer text-xl font-normal"
                onClick={toggleBodyScroll}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
