import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
  } = product;
  console.log(item);
  return (
    <div>
      <div>
        <div className="card bg-base-100  border border-gray-200 p-4">
          <figure className=" rounded-lg">
            <img className="w-120 h-68 object-contain" src={photo} alt={item} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item}</h2>
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price}
            </p>
            <p>
              <span className="font-bold">customization:</span> {customization}
            </p>

            <div className="card-actions justify-end">
              <Link
                className="btn bg-[#2F80ED] text-white rounded-4xl"
                to={`/equipments/${_id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
