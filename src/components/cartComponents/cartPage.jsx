import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import CartItem from "./cartItem";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";
import Link from "next/link";
import { useCart } from "@/data/useCartStore";
import EmptyCartItem from "./emptyCartItem";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="bg-white flex flex-col items-center">
      {/* Navbar */}
      <Navbar bgColor={"white"} />

      {/* Hero Banner */}
      <HeroBanner title={"Cart"} />

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start mb-16 gap-8 lg:gap-12 px-4 lg:px-24 w-full">
        {/* Product List Section */}
        <div className="w-full lg:w-3/5">
          <div className="hidden lg:flex gap-9 items-center py-4 px-8 bg-[#FFF9E5]">
            <p className="text-black text-sm lg:text-base font-medium flex-1">
              Product
            </p>
            <p className="text-black text-sm lg:text-base font-medium flex-1">
              Price
            </p>
            <p className="text-black text-sm lg:text-base font-medium flex-1">
              Quantity
            </p>
            <p className="text-black text-sm lg:text-base font-medium flex-1">
              Subtotal
            </p>
          </div>
          {cart.length === 0 ? (
            <EmptyCartItem />
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-start px-6 py-8 bg-[#FFF9E5]">
          <h3 className="text-black text-2xl lg:text-4xl font-semibold mb-8">
            Cart Totals
          </h3>
          <div className="flex justify-between w-full mb-6">
            <h4 className="text-black text-base font-medium">Subtotal</h4>
            <p className="text-[#9F9F9F] text-base font-normal">
              {cart.length === 0
                ? "0.00"
                : cart
                    .reduce((acc, item) => acc + item.amount * item.price, 0)
                    .toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between w-full mb-10">
            <h4 className="text-black text-base font-medium">Total</h4>
            <p className="text-[#B88E2F] text-xl font-medium">
              {cart.length === 0
                ? "0.00"
                : cart
                    .reduce((acc, item) => acc + item.amount * item.price, 0)
                    .toFixed(2)}
            </p>
          </div>
          <Link href={"/checkout"}>
            <button
              type="submit"
              className="py-2 px-8 lg:px-12 rounded-xl border border-black cursor-pointer text-black text-base lg:text-xl font-normal w-full lg:w-52 h-12 lg:h-14"
            >
              Check out
            </button>
          </Link>
        </div>
      </div>

      {/* Banner */}
      <Banner />

      {/* Footer Section */}
      <Footer />
      <div className="bg-[#D9D9D9] w-full lg:w-9/12 h-0.5 flex my-8"></div>
      <div className="flex justify-center lg:justify-start items-center w-full lg:w-9/12 px-4">
        <p className="text-black text-sm lg:text-base font-normal mb-8 text-center lg:text-left">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default CartPage;
