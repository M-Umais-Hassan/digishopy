import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PlaceOrder from "./pages/placeOrder";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
