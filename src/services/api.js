import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const placeOrder = async (data) => {
  const contactRef = doc(collection(db, "contact"));
  await setDoc(contactRef, {
    firtName: data.firstName,
    lastName: data.lastName,
    contactNo: data.contactNo,
    email: data.email,
    address: data.address,
    country: data.country,
    province: data.province,
    city: data.city,
    postalCode: data.postalCode,
    createdAt: serverTimestamp(),
  });
};

export { placeOrder };
