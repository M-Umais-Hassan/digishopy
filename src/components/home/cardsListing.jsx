import axios from "axios";
import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import Card from "./card";

const CardsListing = ({
  cartItems,
  setCartItems,
  summary,
  setSummary,
  brandFilters,
  genderFilters,
}) => {
  const { data, loading } = useProducts(brandFilters, genderFilters);

  return (
    <div className="cards__list">
      {loading
        ? "Loading Products"
        : data.length
        ? data?.map((item) => (
            <div key={item.id}>
              <Card
                data={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setSummary={setSummary}
                summary={summary}
              />
            </div>
          ))
        : "No Products found"}
    </div>
  );
};

export default CardsListing;
