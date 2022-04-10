import { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";

const useProducts = (brandFilters, genderFilters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const productsRef = collection(db, "products");
      const productsQuery = query(
        productsRef,
        ...(genderFilters.length ? [where("gender", "==", genderFilters)] : []),
        ...(brandFilters.length ? [where("brand", "in", brandFilters)] : [])
      );
      const querySnapshot = await getDocs(productsQuery);
      const dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push(doc.data());
      });
      setData(dataArr);
      setLoading(false);
    };

    getData();
  }, [brandFilters, genderFilters]);

  return { data, loading };
};

export default useProducts;
