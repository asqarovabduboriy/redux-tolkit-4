import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Cart from "./page/Cart/Cart";
import Wishlist from "./page/wishlist/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
