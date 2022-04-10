import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../../redux/actions/productsActions";

const AboutProduct = () => {
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
    <>
      <h1>
        Product title will go here as it is what is we are going to put here
      </h1>
      <br />
      <h2 id="txt__color__primary">
        Price: 600 Rs <strike>1000 Rs</strike>
      </h2>
      <br />
      <br />
      <h3>Description</h3>
      <hr />
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
      </p>
      <button onClick={handleCart}>Add to cart</button>
      <ToastContainer style={{ fontSize: "16px" }} />
    </>
  );
};

export default AboutProduct;
