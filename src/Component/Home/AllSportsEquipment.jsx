import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);

  let count = 0;
  if (count <= products.length) {
    console.log(count);
  }

  return (
    <div className="w-10/12 mx-auto mt-15 ">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
