import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DatabaseInstance } from "../../API/AxiosInstace";

const Edit = () => {
  const location = useLocation().state;
  const navigate = useNavigate();

  const { id, name, age, contact, pincode, email, address } = location;

  const [formData, setFormData] = useState({
    address: address,
    age: age,
    contact: contact,
    email: email,
    id: id,
    name: name,
    pincode: pincode,
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
      const x = await DatabaseInstance.put(`address/${id}`, formData);
      // setFormData({id:"", name:"", age:'', contact:'', pincode:"", email:"", address:""})
      navigate("/address");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="p-4 min-w-[100%] flex justify-center items-center">
      <form
        className="space-y-4 bg-white  w-[400px] min-w-[300px]  border-2 rounded-lg border-green-400  p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold">DETAILS</h1>
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
          />
        </div>
        {/* <div className="flex flex-col">
          <label
            htmlFor="age"
            className="mb-2 text-sm font-medium text-gray-700"
          >
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
            htmlFor="address"
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
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="p-2 border border-gray-300 rounded-md"
            value={formData.address}
            onChange={handleChange}
          />
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
          />
        </div>
        <button
          className="border px-5 py-2 rounded-md bg-blue-400 text-white font-bold"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
