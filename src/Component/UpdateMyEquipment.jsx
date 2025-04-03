import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateMyEquipment = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const item = form.item.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const delivery = form.delivery.value;
    const stock = form.stock.value;
    const email = form.email.value;
    const username = form.username.value;
    const photo = form.photo.value;

    const updatedEquipmentData = {
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
    };

    fetch(
      `https://assignment-10-server-ten-beta.vercel.app/equipments/${params.id}`,
      {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(updatedEquipmentData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          toast.success("Product updated successfully.");
        }
        // form.reset();
      });
  };
  return (
    <div>
      <div className=" w-10/12 mx-auto mb-52 mt-20">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleAddEquipment}>
          <div className=" ">
            {/* first row */}

            <div className="md:flex mb-3">
              {/* Item Name */}
              <div className="md:w-1/2 ">
                <legend className="fieldset-legend">Item Name</legend>
                <label className="input-group">
                  <input
                    type="text"
                    name="item"
                    required
                    placeholder="Item Name"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              {/* Category Name */}
              <div className=" md:w-1/2 md:ml-4">
                <legend className="fieldset-legend">Category Name</legend>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    required
                    placeholder="Category Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* second row */}
            <div className=" md:flex mb-3">
              {/* Description */}
              <div className="md:w-1/2 ">
                <legend className="fieldset-legend">Description</legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="description"
                    required
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Price */}
              <div className="md:w-1/2 md:ml-4">
                <legend className="fieldset-legend">Price</legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="price"
                    required
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* third row */}
            <div className="md:flex mb-3">
              {/* Rating */}
              <div className="md:w-1/2 ">
                <legend className="fieldset-legend">Rating</legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="rating"
                    required
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Customization */}
              <div className="md:w-1/2 md:ml-4">
                <legend className="fieldset-legend">Customization </legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="customization"
                    required
                    placeholder="Customization "
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* fourth row */}
            <div className="md:flex mb-3">
              {/* Processing Time */}
              <div className="md:w-1/2 ">
                <legend className="fieldset-legend">Processing Time </legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="delivery"
                    required
                    placeholder="Processing Time "
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Stock Status */}
              <div className="md:w-1/2 md:ml-4">
                <legend className="fieldset-legend">Stock Status </legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="stock"
                    required
                    placeholder="Stock Status "
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* fifth row */}
            <div className="md:flex mb-3">
              {/* User Email */}
              <div className="md:w-1/2 ">
                <legend className="fieldset-legend">User Email </legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="email"
                    required
                    placeholder="User Email "
                    className="input input-bordered w-full"
                    defaultValue={user?.email}
                    readOnly
                  />
                </label>
              </div>
              {/* User Name */}
              <div className="md:w-1/2 md:ml-4">
                <legend className="fieldset-legend">User Name </legend>
                <label className="input-group">
                  <input
                    type="input"
                    name="username"
                    required
                    placeholder="User Name "
                    className="input input-bordered w-full"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </label>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control w-full">
                <legend className="fieldset-legend">Photo URL </legend>

                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-block bg-[#2F80ED] text-white">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyEquipment;
