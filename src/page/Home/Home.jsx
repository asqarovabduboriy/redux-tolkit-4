import React, { useState } from "react";
import "./Home.css";
import Main from "../../components/main/Main";
import Product from "../../components/product/Product";
import { usefect } from "../../hook/usefect/usefect";



const Home = () => {
  const [category, setCategory] = useState("All");

  const { data: categories } = usefect(`/products/categories`);

  const { data, loading } = usefect(
    `/products${category === "All" ? "" : `/category/${category}`}?limit=8`,
    category
  );

  return (
    <>
      <Main />
      <Product data={data} categories={categories} category={category} setCategory={setCategory} loading={loading} />
    </>
  );
};

export default Home;
