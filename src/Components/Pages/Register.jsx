import React, { useEffect, useState } from "react";
import { DatabaseInstance } from "../../API/AxiosInstace";
import { NavLink, useNavigate } from "react-router";
import Modall from "../Loading/Modall";

const Register = () => {
  const [showModall, setShowModall] = useState({
    isVisible: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setShowModall({ isVisible: false, message: "" });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DatabaseInstance.post("users", formData);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setShowModall({ isVisible: true, message: "Registration Error" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, name, phone, password } = formData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-xl text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full text-xl p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-xl text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 text-xl border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4 w-full text-xl ">
            <label htmlFor="password" className="block text-xl text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 text-xl border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4 w-full text-xl">
            <label htmlFor="phone" className="text-xl block text-gray-700">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-center pt-2">
          Already have an Account?{" "}
          <span className="text-blue-900 underline decoration-1">
            <NavLink to="/login">click here</NavLink>
          </span>
        </p>
      </div>
      {showModall.isVisible && (
        <Modall message={{ title: "Message", message: showModall.message }} />
      )}
    </div>
  );
};

export default Register;
