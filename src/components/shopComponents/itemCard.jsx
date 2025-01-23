import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
  const { id, imageUrl, name, price, description } = item;

  const truncateDescription = (desc) => {
    const maxLength = 100; 
    return desc.length > maxLength ? `${desc.slice(0, maxLength)}...` : desc;
  };

  return (
    <div className="max-w-sm border border-gray-200 rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl transform transition-transform duration-500 hover:shadow-2xl p-6">
      <div className="relative w-full h-[240px] rounded-lg overflow-hidden mb-5">
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          src={imageUrl}
          alt={name}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-lg font-semibold">
          {name}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-gray-900 text-xl font-bold mb-3">{name}</h3>
        <h4 className="text-blue-700 text-2xl font-black mb-6">Rs. {price}.00</h4>
        <p className="text-gray-700 text-sm mb-4">{truncateDescription(description)}</p>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
