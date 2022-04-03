import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsFilterCircle } from "react-icons/bs";

const Navbar = ({
  cartItems,
  handleCart,
  handleFilters,
  hideFilters,
  hideCart,
}) => {
  return (
    <div className="navbar">
      <h1>DigiShopy</h1>
      <div className="nav__btns">
        <div
          className="show__filter__btn"
          onClick={() => {
            handleFilters();
            !hideCart && handleCart();
          }}
        >
          <BsFilterCircle />
        </div>
        <div
          className="show__cart__btn"
          onClick={() => {
            handleCart();
            !hideFilters && handleFilters();
          }}
        >
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <HiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
