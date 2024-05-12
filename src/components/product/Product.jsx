import React, { useState } from "react";
import "./Product.css";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import "./Product.css";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";

const Product = ({ data, categories, loading, setCategory, category }) => {
  const dispatch = useDispatch();
  let wishlist = useSelector((state) => state.wishslice.value);


  const categorya = categories?.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let products = data.products?.map((el) => (

    <div className="card_product" key={el.id}>
      <img src={el.images[0]} alt="" />
      <h2 title={el.title}>{el.title}</h2>
      <p>${el.price}</p>
      <div className="icon__wrapper">
        <button onClick={() => dispatch(toogleLike(el))}>
          {wishlist.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <CiHeart />
          )}
        </button>
       <button onClick={() => dispatch(addToCart(el))}> 
        
        <TiShoppingCart />
       </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name=""
          id=""
        >
          <option value="All">All</option>
          {categorya}
        </select>
        <div className="card_wrapper">
          {loading ? <Loading count={8} /> : products}
        </div>
      </div>
    </>
  );
};

export default Product;
