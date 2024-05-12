import React from "react";
import "./Navbar.css";
import logo from "../../assets/Imgs/Logo 1.png";
import { NavLink } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const Navbar = () => {
  const wishlist = useSelector((state) => state.wishslice.value);
  const cart = useSelector((state) => state.cart.value);
console.log(cart);
  return (
    <>
      <header>
        <div className="container navbar">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>Plan Care</li>
              <li>Blogs</li>
            </ul>
          </nav>

          <div className="icon__nav">
             <FaSearch/>
             <NavLink to={"/cart"}> <TiShoppingCart /></NavLink>
             <div className="number">{cart.length}</div>
             <NavLink to={"/wishlist"}> <CiHeart /></NavLink>
             <div className="number_two">{wishlist.length}</div>
             <button><IoLogInOutline />Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
