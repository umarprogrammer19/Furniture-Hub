import React from "react";
import { useCart } from "@/data/useCartStore";
import CheckoutItem from "./checkoutItem";

const CheckoutBill = () => {
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-6 mt-6 px-4 sm:px-8 lg:px-16 xl:px-32 w-full max-w-screen-lg mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-4">
        <h3 className="text-black text-lg sm:text-2xl font-medium">Product</h3>
        <h3 className="text-black text-lg sm:text-2xl font-medium">Subtotal</h3>
      </div>

      {/* Checkout Items */}
      <div className="w-full mb-6">
        {cart.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))}
      </div>

      {/* Divider Line */}
      <div className="bg-[#D9D9D9] w-full h-0.5 flex my-12"></div>

      {/* Payment Method Section */}
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <p className="text-black text-sm sm:text-base font-normal">Direct Bank Transfer</p>
      </div>
      <p className="text-[#9F9F9F] text-justify text-sm sm:text-base font-light w-full">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </p>

      {/* Payment Methods List */}
      <div className="flex gap-4 items-center mt-4">
        <div className="w-5 h-5 border border-[#9F9F9F] rounded-full"></div>
        <p className="text-[#9F9F9F] text-sm sm:text-base font-normal">Direct Bank Transfer</p>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <div className="w-5 h-5 border border-[#9F9F9F] rounded-full"></div>
        <p className="text-[#9F9F9F] text-sm sm:text-base font-normal">Cash On Delivery</p>
      </div>

      {/* Privacy Policy Section */}
      <p className="text-black text-justify text-sm sm:text-base font-light mb-12 w-full">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <span className="text-black text-sm sm:text-base font-semibold">
          privacy policy.
        </span>
      </p>

      {/* Subtotal Section (Moved below payment method on small screens) */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-6 w-full">
        <h3 className="text-black text-sm sm:text-base font-normal">Subtotal</h3>
        <h3 className="text-black text-sm sm:text-base font-light">
          {cart.length === 0 ? null : (
            <p>
              Rs.
              {cart
                .reduce((acc, item) => acc + item.amount * item.price, 0)
                .toFixed(2)}
            </p>
          )}
        </h3>
      </div>

      {/* Total Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-6 w-full">
        <h3 className="text-black text-sm sm:text-base font-normal">Total</h3>
        <h3 className="text-[#B88E2F] text-xl sm:text-2xl font-bold">
          {cart.length === 0 ? null : (
            <p>
              Rs.
              {cart
                .reduce((acc, item) => acc + item.amount * item.price, 0)
                .toFixed(2)}
            </p>
          )}
        </h3>
      </div>

      {/* Place Order Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="py-2 px-12 rounded-2xl border border-black cursor-pointer text-black text-lg sm:text-xl font-normal w-full sm:w-52 mb-20 h-14"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutBill;
