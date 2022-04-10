import { useSelector } from "react-redux";
import useBrands from "../../hooks/useBrands";
import { genderData } from "../../utils/data";

const Filters = ({ setGenderFilters, setBrandFilters, brandFilters }) => {
  const { data, loading } = useBrands();

  const handleGender = (e) => {
    setGenderFilters(e.target.value);
  };

  const handleBrands = (e) => {
    if (!brandFilters.length)
      setBrandFilters((prev) => [...prev, e.target.value]);
    else {
      if (brandFilters.includes(e.target.value)) {
        const filteredArr = brandFilters.filter((el) => el !== e.target.value);
        setBrandFilters(filteredArr);
      } else setBrandFilters((prev) => [...prev, e.target.value]);
    }
  };

  const clearFilters = () => {
    setGenderFilters("");
    setBrandFilters([]);
  };

  return (
    <div className="filters">
      <button className="clear__filter" onClick={clearFilters}>
        Clear Filters
      </button>
      <h1>Filters</h1>
      <hr />
      <div className="filter__section">
        <h3>Gender</h3>
        <form onChange={handleGender}>
          {genderData.map((el) => (
            <div key={el.id}>
              <label>
                <input type="radio" name="gender" value={el.value} /> {el.label}
              </label>
              <br />
            </div>
          ))}
        </form>
      </div>
      <div className="filter__section">
        <h3>Brands</h3>
        <form onChange={handleBrands}>
          {loading
            ? "Loading Brands..."
            : data?.map((el) => (
                <div key={el.id}>
                  <label>
                    <input type="checkbox" value={el.name} /> {el.name}
                  </label>
                  <br />
                </div>
              ))}
        </form>
      </div>
    </div>
  );
};

export default Filters;
