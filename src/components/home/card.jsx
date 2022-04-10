import { MdAddShoppingCart } from "react-icons/md";
import { sliceText } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/productsActions";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { BiExpand } from "react-icons/bi";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.productsReducer);
  const handleCart = (item) => {
    const itemInCart = cartItems.includes(item);
    if (itemInCart) {
      toast.warning("Product is already in cart");
    } else {
      dispatch(addToCart(item));
    }
  };
  return (
    <div className="product__card">
      <button className="view__details">
        <Link to={`/product/${data.id}`}>
          <BiExpand />
        </Link>
      </button>
      <div className="img__box">
        <img src={data.image} alt="product" />
      </div>
      <div className="price__box">
        <div className="title__area">
          <h3>
            <Link to={`/product/${data.id}`}>
              {data.title && sliceText(data.title, 30)}
            </Link>
          </h3>
        </div>
        <div className="btn__area">
          <button onClick={() => handleCart(data)}>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
      <h4>Price: {data.price} Rs</h4>
      <ToastContainer style={{ fontSize: "16px" }} />
    </div>
  );
};

export default Card;
