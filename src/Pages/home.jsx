import { useState } from "react";
import CardsListing from "../components/home/cardsListing";
import Cart from "../components/home/cart";
import Footer from "../components/footer";
import Form from "../components/home/form";
import Navbar from "../components/navbar";
import OrderSummary from "../components/home/orderSummary";
import OrderPlaced from "../components/modals/orderPlaced";
import { ToastContainer } from "react-toastify";
import Filters from "../components/home/filters";

const Home = () => {
  const deliveryCharges = 120;
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    items: 0,
    price: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [hideCart, setHideCart] = useState(true);
  const [hideFilters, setHideFilters] = useState(true);
  const [genderFilters, setGenderFilters] = useState("");
  const [brandFilters, setBrandFilters] = useState([]);

  return (
    <>
      {showModal && <OrderPlaced closeModal={() => setShowModal(false)} />}
      {(!hideCart || !hideFilters) && (
        <div
          className="overlay__component"
          onClick={() => {
            setHideCart(true);
            setHideFilters(true);
          }}
        ></div>
      )}
      <Navbar
        cartItems={cartItems}
        handleCart={() => setHideCart(!hideCart)}
        handleFilters={() => setHideFilters(!hideFilters)}
        hideCart={hideCart}
        hideFilters={hideFilters}
      />
      <div className="container main">
        <div className={`filters__box ${hideFilters && "hide"}`}>
          <Filters
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
            setGenderFilters={setGenderFilters}
            setBrandFilters={setBrandFilters}
            brandFilters={brandFilters}
          />
        </div>
        <div className="main__product__box">
          <CardsListing
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
            genderFilters={genderFilters}
            brandFilters={brandFilters}
          />
        </div>
        <div className={`cart__box ${hideCart && "hide"}`}>
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
          />
        </div>
      </div>
      <div className="container">
        <OrderSummary price={summary.price} items={summary.items} />
        <Form
          cartItems={cartItems}
          price={summary.price}
          items={summary.items}
          deliveryCharges={deliveryCharges}
          openModal={() => setShowModal(true)}
          clearCartItems={() => setCartItems([])}
        />
      </div>
      <Footer />
      <ToastContainer style={{ fontSize: "16px" }} />
    </>
  );
};

export default Home;
