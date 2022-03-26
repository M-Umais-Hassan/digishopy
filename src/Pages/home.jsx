import { useState } from "react";
import CardsListing from "../components/home/cardsListing";
import Cart from "../components/home/cart";
import Footer from "../components/footer";
import Form from "../components/home/form";
import Navbar from "../components/navbar";
import OrderSummary from "../components/home/orderSummary";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    items: 0,
    price: 0,
  });

  return (
    <>
      <Navbar />
      <div className="container main">
        <div className="left__box">
          <CardsListing
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
          />
        </div>
        <div className="right__box">
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
        <Form />
      </div>

      <Footer />
    </>
  );
};

export default Home;
