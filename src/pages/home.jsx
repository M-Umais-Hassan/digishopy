import { useState } from "react";
import CardsListing from "../components/home/cardsListing";
import Cart from "../components/home/cart";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Filters from "../components/home/filters";
import { useSelector, useDispatch } from "react-redux";
import { closeCartAndFilter } from "../redux/actions/navbarActions";

const Home = () => {
  const dispatch = useDispatch();
  const { cart, filter } = useSelector((state) => state.navbarReducer);
  const [genderFilters, setGenderFilters] = useState("");
  const [brandFilters, setBrandFilters] = useState([]);

  return (
    <>
      {(cart || filter) && (
        <div
          className="overlay__component"
          onClick={() => dispatch(closeCartAndFilter())}
        ></div>
      )}
      <Navbar filterIcon={true} cartIcon={true} />
      <div className="container main flex__space__between">
        <div className={`filters__box ${!filter && "hide"}`}>
          <Filters
            setGenderFilters={setGenderFilters}
            setBrandFilters={setBrandFilters}
            brandFilters={brandFilters}
          />
        </div>
        <div className="main__product__box">
          <CardsListing
            genderFilters={genderFilters}
            brandFilters={brandFilters}
          />
        </div>
        <div className={`cart__box ${!cart && "hide"}`}>
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
