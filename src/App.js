import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";    
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nopage from "./pages/Nopage";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="account" element={<Account />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
