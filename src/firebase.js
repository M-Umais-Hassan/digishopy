import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTDyCGdsiqp_LRYO4o53p5kuQI8MquBFQ",
  authDomain: "db-digishopy.firebaseapp.com",
  projectId: "db-digishopy",
  storageBucket: "db-digishopy.appspot.com",
  messagingSenderId: "180287419554",
  appId: "1:180287419554:web:a94d1e12896009ea5113fb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
