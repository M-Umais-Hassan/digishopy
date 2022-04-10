import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { price, items } = useSelector(
    (state) => state.productsReducer.summary
  );
  return (
    <div className="order__summary">
      <h1>Order Summary</h1>
      <div className="order__summary__details">
        <div>{price > 0 ? parseFloat(price).toFixed(2) : 0} Rs</div>
        <div>
          {items} Item{items > 1 && "s"}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
