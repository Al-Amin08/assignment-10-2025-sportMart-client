import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipment = () => {
  const loadedData = useLoaderData();
  const [loadedProducts, setLoadedProducts] = useState(loadedData);
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
  // console.log(loadedData);

  const handleDelete = (_id) => {
    // console.log("clicked id ", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-ten-beta.vercel.app/equipments/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        const remainingProducts = loadedProducts.filter(
          (product) => product._id != _id
        );
        setLoadedProducts(remainingProducts);
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto my-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loadedProducts.map((product) => (
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
                <Link to={`/updateMyEquipment/${product._id}`}>
                  <button className="btn bg-[#2F80ED] text-white">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn bg-[#2F80ED] text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
