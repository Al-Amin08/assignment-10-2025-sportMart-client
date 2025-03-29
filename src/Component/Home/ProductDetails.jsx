import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

const ProductDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const {
    item,
    category,
    delivery,
    description,
    price,
    rating,
    customization,
    stock,
    email,
    username,
    photo,
    _id,
  } = loadedData;
  return (
    <div>
      <div className="w-10/12 mx-auto mt-30 mb-50 text-[#333333] ">
        <div className="card bg-base-100 lg:flex-row border border-gray-200 p-4 shadow-xs">
          <figure className=" rounded-lg">
            <img
              className="lg:w-156 lg:h-96 object-contain"
              src={photo}
              alt={item}
            />
          </figure>
          <div className="space-y-3 pl-5 pt-17">
            <h2 className="card-title text-2xl">{item}</h2>
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price}
            </p>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
            <p>
              <span className="font-bold">Customization:</span> {customization}
            </p>
            <p>
              <span className="font-bold">Delivery Time:</span> {delivery}
            </p>
            <p>
              <span className="font-bold">Stock:</span> {stock}
            </p>
            <p className="font-bold ">
              Rating:{" "}
              <span className="bg-[#ffd700] rounded-4xl mt-0.75 py-1 px-3 font-medium w-12.5 text-center">
                {rating}
              </span>
            </p>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
