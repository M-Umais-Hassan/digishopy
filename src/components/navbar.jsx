import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsFilterCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  handleOpenCart,
  handleOpenFilter,
} from "../redux/actions/navbarActions";
import Logo from "../assets/logo.png";

const Navbar = ({ filterIcon, cartIcon }) => {
  const { cartItems } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav__btns">
        {filterIcon && (
          <div
            className="show__filter__btn"
            onClick={() => {
              dispatch(handleOpenFilter());
            }}
          >
            <BsFilterCircle />
          </div>
        )}
        {cartIcon && (
          <div
            className="show__cart__btn"
            onClick={() => {
              dispatch(handleOpenCart());
            }}
          >
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
            <HiOutlineShoppingCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
