import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-ten-beta.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-36 space-y-10 text-[#333333]">
      <div className="">
        <h1 className="text-center font-bold text-4xl my-20">
          All Sports Equipment{" "}
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 ">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
