import React from "react";
import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
  const { id, imageUrl, title, price } = item;

  return (
    <div className="w-[300px] border text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-[0.3s] ease-[ease] p-4 border-solid border-[#ccc] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
      <div className="w-[260px] h-[170px] bg-cover overflow-hidden mb-2">
        <img className="w-full object-cover" src={imageUrl} alt="Item" />
      </div>
      <p className="text-black text-base font-normal">{title}</p>
      <h3 className="text-black text-2xl font-medium">Rs. {price}.00</h3>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
