import { MdAddShoppingCart } from "react-icons/md";
import { sliceText } from "../../utils/helpers";

const Card = ({ data, cartItems, setCartItems, setSummary, summary }) => {
  const addToCart = (item) => {
    if (!cartItems.includes(item)) {
      setCartItems((prev) => [...prev, item]);
      setSummary({
        ...summary,
        price: summary.price + item.price,
        items: summary.items + 1,
      });
    }
  };
  return (
    <div className="product__card">
      <div className="img__box">
        <img src={data.image} alt="product" />
      </div>
      <div className="price__box">
        <div className="title__area">
          <h3>{data.title && sliceText(data.title, 30)}</h3>
        </div>
        <div className="btn__area">
          <button onClick={() => addToCart(data)}>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
      <h4>Price: {data.price} Rs</h4>
    </div>
  );
};

export default Card;
