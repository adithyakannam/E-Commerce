import React, { useState } from "react";
import { DatabaseInstance } from "../../API/AxiosInstace";
import { useNavigate } from "react-router";

const NewAddress = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DatabaseInstance.post("/address", formData);
      navigate("/address");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 min-w-[100%] flex justify-center items-center h-screen">
        <form
          method="post"
          className="space-y-4  w-[400px] min-w-[300px]  border-2 rounded-lg bg-white  p-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl font-bold">New Address</h1>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="age" className="mb-2 text-sm font-medium text-gray-700">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.age}
              onChange={handleChange}
            />
          </div> */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              className="p-2 border border-gray-300 rounded-md resize-none"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Contact:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pincode"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="border px-5 py-2 rounded-md bg-blue-400 text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
