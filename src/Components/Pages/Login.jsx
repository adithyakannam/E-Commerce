import React, { useContext, useEffect, useState } from "react";
import { DatabaseInstance } from "../../API/AxiosInstace";
import {  NavLink, useNavigate } from "react-router";
import { Authentication } from "../../Context/AuthenticateContext";
import Modall from "../Loading/Modall";

const Login = () => {
  const [userEmail, setEmail] = useState("johndoe@yahoo.com");
  const [userPassword, setPassword] = useState("67890" );
  const { isAuthenticated, setAuthenticated } = useContext(Authentication);
  const [showModall, setShowModall] = useState({
    isVisible: false,
    message: "Details No Matched",
  });
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   const isAuthenticate = localStorage.getItem("isAuthenticated");
  //   const lemail = localStorage.getItem("email");
  //   if (isAuthenticate) {
  //     if (lemail) {
  //       navigate("/home");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   handleLogin();
  // }, []);


  
 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await DatabaseInstance.get(`users?email=${userEmail}`);

  //     if (response.data.length == 0) {
  //       setShowModall({ isVisible: true, message: "USER DETAILS NOT FOUND" });
  //     }
  //     const { email, password } = response.data[0];

  //     if (email == userEmail && password == userPassword) {
  //       localStorage.setItem("name", response.data[0].name);
  //       localStorage.setItem("email", userEmail);
  //       setAuthenticated(true);
  //       setShowModall({ isVisible: true, message: "Your Login is Sucessfull✅" });
  //       setTimeout(() => {
  //         navigate("/home");
  //       }, 2000);
  //     } else {
  //       setShowModall({
  //         isVisible: true,
  //         message: "Incorrect Password :(",
  //       });
  //     }
  //   } catch (error) {
  //     setShowModall({ isVisible: true, message: "Site under maintance" });
  //   }
  // };

  const handleClose = ()=>{
    setShowModall({isvisible:false,message:''})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if ( userEmail == "johndoe@yahoo.com"&& userPassword == "67890"  ) {
      localStorage.setItem("name","johndoe");
      localStorage.setItem("email", userEmail);
      setAuthenticated(true);
      setShowModall({ isVisible: true, message: "Your Login is Sucessfull✅" });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setShowModall({
        isVisible: true,
        message: "Incorrect Password :(",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        className="bg-slate-200 rounded-lg shadow-md w-full max-w-xl min-h-[50vh] flex flex-col justify-center items-center py-8 px-[50px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl border-2 font-bold text-center">Login</h2>
        <div className="form-group mb-4 w-full">
          <label htmlFor="email" className="block text-gray-700 text-xl">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userEmail}
            placeholder="johndoe@yahoo.com"
            onChange={(e) =>{
              setEmail(e.target.value)}}
            required disabled
          />
        </div>
        <div className="form-group mb-6 w-full">
          <label htmlFor="password" className="block text-gray-700 text-xl">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userPassword} placeholder="67890" 
            onChange={(e) => {
              setPassword(e.target.value)}}
            required disabled
          />
        </div>
        <button
          type="submit"
          className="w-[20%] text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="text-center pt-2">
          Don't have an Account?{" "}
          <span className="text-blue-900 underline decoration-1">
            <NavLink to="/register">click here</NavLink>
          </span>
        </p>
      </form>
      {showModall.isVisible && (
        <Modall message={{ title: "Message", message: showModall.message }} onClose={handleClose} />
      )}
    </div>
  );
};

export default Login;
