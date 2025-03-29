import React from "react";
import { useLoaderData } from "react-router-dom";

const MyEquipment = () => {
  const loadedData = useLoaderData();
  //   const {
  //     item,
  //     category,
  //     delivery,
  //     description,
  //     price,
  //     rating,
  //     customization,
  //     stock,
  //     email,
  //     username,
  //     photo,
  //   } = loadedData;
  console.log(loadedData);
  return (
    <div className="w-10/12 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loadedData.map((product) => (
          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={product.photo}
                alt="Shoes"
                className="rounded-xl w-120 h-120 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.item}</h2>
              <p>{product.description}</p>
              <p>
                <span className="font-bold ">Price: </span> {product.price}$
              </p>
              <div className="card-actions pt-5">
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
