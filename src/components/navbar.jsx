import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = ({ cartItems, handleCart }) => {
  return (
    <div className="navbar">
      <h1>DigiShopy</h1>
      <div className="show__cart__btn" onClick={handleCart}>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
        <HiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
