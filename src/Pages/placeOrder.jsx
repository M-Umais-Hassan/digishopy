import { useState } from "react";
import OrderSummary from "../components/placeOrder/orderSummary";
import Form from "../components/placeOrder/form";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import OrderPlaced from "../components/modals/orderPlaced";

const PlaceOrder = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <OrderPlaced closeModal={() => setShowModal(false)} />}
      <Navbar filterIcon={false} cartIcon={false} />
      <div className="container main">
        <OrderSummary />
        <Form openModal={() => setShowModal(true)} />
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
