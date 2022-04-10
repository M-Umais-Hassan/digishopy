import useProducts from "../../hooks/useProducts";
import Card from "./card";

const CardsListing = ({ brandFilters, genderFilters }) => {
  const { data, loading } = useProducts(brandFilters, genderFilters);

  return (
    <div className="cards__list">
      {loading
        ? "Loading Products"
        : data.length
        ? data?.map((item) => (
            <div key={item.id}>
              <Card data={item} />
            </div>
          ))
        : "No Products found"}
    </div>
  );
};

export default CardsListing;
