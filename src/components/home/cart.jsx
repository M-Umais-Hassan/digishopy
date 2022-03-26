import { TiDelete } from "react-icons/ti";
import { BsCartXFill } from "react-icons/bs";
import { sliceText } from "../../utils/helpers";

const Cart = ({ cartItems, setCartItems, summary, setSummary }) => {
  const deleteItem = (id, price) => {
    const updatedArr = cartItems.filter((el) => el.id !== id);
    setCartItems(updatedArr);
    setSummary({
      ...summary,
      price: summary.price - price,
      items: summary.items - 1,
    });
  };
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div className="cart__item" key={item?.id}>
            <div className="img__box">
              <img src={item?.image} alt="cart item" />
            </div>
            <div className="cart__item__details__box">
              <h5>1 X {sliceText(item?.title, 15)}</h5>
              <h5>{item?.price} Rs</h5>
            </div>
            <div
              className="delete__btn"
              onClick={() => deleteItem(item.id, item.price)}
            >
              <TiDelete />
            </div>
          </div>
        ))
      ) : (
        <div className="empty__cart">
          <BsCartXFill />
        </div>
      )}
    </div>
  );
};

export default Cart;
