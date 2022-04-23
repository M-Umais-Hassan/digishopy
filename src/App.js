import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PlaceOrder from "./pages/placeOrder";
import ProductDetails from "./pages/productDetails";
import TermsOfServices from "./pages/TermsOfServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
