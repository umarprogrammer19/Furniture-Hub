import React from 'react'

const CheckoutItem = ({item}) => {
  return (
    <div className="flex justify-between gap-80 items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-[#9F9F9F] text-base font-normal">{item.title}</h3>
          <p className="text-black text-xs font-medium">X</p>
          <p className="text-black text-xs font-medium">{item.amount}</p>
        </div>
        <h3 className="text-black text-base font-light">Rs. {item.price}.00</h3>
      </div>
  )
}

export default CheckoutItem