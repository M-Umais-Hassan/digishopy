import { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useBrands = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const brandsRef = collection(db, "brands");
      const brandsQuery = query(brandsRef);
      const querySnapshot = await getDocs(brandsQuery);
      const dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push(doc.data());
      });
      setData(dataArr);
      setLoading(false);
    };

    getData();
  }, []);

  return { data, loading };
};

export default useBrands;
