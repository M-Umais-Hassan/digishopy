import { useState } from "react";
import CardsListing from "../components/home/cardsListing";
import Cart from "../components/home/cart";
import Footer from "../components/footer";
import Form from "../components/home/form";
import Navbar from "../components/navbar";
import OrderSummary from "../components/home/orderSummary";
import OrderPlaced from "../components/modals/orderPlaced";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const deliveryCharges = 120;
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    items: 0,
    price: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [hideCart, setHideCart] = useState(true);

  return (
    <>
      {showModal && <OrderPlaced closeModal={() => setShowModal(false)} />}
      <Navbar cartItems={cartItems} handleCart={() => setHideCart(!hideCart)} />
      <div className="container main">
        <div className="left__box">
          <CardsListing
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
          />
        </div>
        <div className={`right__box ${hideCart && "hide"}`}>
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
        />
      </div>
      <Footer />
      <ToastContainer style={{ fontSize: "16px" }} />
    </>
  );
};

export default Home;
