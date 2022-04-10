import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cart from "../components/home/cart";
import ImageSlider from "../components/productDetails/Slider";
import AboutProduct from "../components/productDetails/AboutProduct";
import "../styles/productDetails.css";
import { productImages } from "../assets/products";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeCartAndFilter } from "../redux/actions/navbarActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.navbarReducer);
  return (
    <>
      {cart && (
        <div
          className="overlay__component"
          onClick={() => dispatch(closeCartAndFilter())}
        ></div>
      )}
      <Navbar filterIcon={false} cartIcon={true} />
      <div className="container main">
        <div className="product__details">
          <div className="slider">
            <ImageSlider images={productImages} />
          </div>
          <div className="details">
            <AboutProduct />
          </div>
        </div>
        <div className={`cart__box ${!cart && "hide"}`}>
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
