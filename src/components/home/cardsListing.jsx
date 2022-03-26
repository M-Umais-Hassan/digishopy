import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";

const CardsListing = ({ cartItems, setCartItems, summary, setSummary }) => {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="cards__list">
      {products.map((item) => (
        <div key={item.id}>
          <Card
            data={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSummary={setSummary}
            summary={summary}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsListing;
