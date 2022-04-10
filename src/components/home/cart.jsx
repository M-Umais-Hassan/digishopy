import { TiDelete } from "react-icons/ti";
import { BsCartXFill } from "react-icons/bs";
import { sliceText } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.productsReducer);

  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div className="cart__item" key={item.id}>
              <div className="img__box">
                <img src={item?.image} alt="cart item" />
              </div>
              <div className="cart__item__details__box">
                <h5>1 X {sliceText(item?.title, 15)}</h5>
                <h5>{item?.price} Rs</h5>
              </div>
              <div
                className="delete__btn"
                onClick={() => dispatch(removeFromCart(item))}
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
      {cartItems.length ? (
        <Link to="/place-order" className="checkout">
          Checkout
        </Link>
      ) : null}
    </>
  );
};

export default Cart;
