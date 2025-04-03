import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);

  let count = 0;
  if (count <= products.length) {
    console.log("count");
  }

  const handleSort = () => {
    fetch("https://assignment-10-server-ten-beta.vercel.app/sortAllEquipments")
      .then((res) => res.json())
      .then((data) => {
        toast.success("Sorting in ascending order");
        setProducts(data);
      });
  };

  return (
    <div className="w-10/12 mx-auto mt-32 mb-52 ">
      <button onClick={handleSort} className="btn bg-[#2F80ED] text-white">
        Sort
      </button>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <tr>
                <th>{++count}</th>
                <td className="font-semibold">{product.item}</td>
                <td>{product.description}</td>
                <td className="font-semibold">{product.price}</td>
                <td>
                  <Link to={`/equipments/${product._id}`}>
                    <button className="btn bg-[#2F80ED] text-white rounded-4xl">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
