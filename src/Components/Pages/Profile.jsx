import React, { useContext, useEffect, useState } from "react";
import { DatabaseInstance } from "../../API/AxiosInstace";
import Spinner from "../Loading/Spinner";
import { useNavigate } from "react-router";
import { Authentication } from "../../Context/AuthenticateContext";



const Profile = () => {
  // const [state, setState] = useState(null);
  // let useEmail = localStorage.getItem("email");
  let navigate = useNavigate();
  const {setAuthenticated} = useContext(Authentication)

  // const fetchApi = async () => {
  //   try {
  //     const response = await DatabaseInstance.get(`users?email=${useEmail}`);
  //     setState(response.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // if (!state) {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );
  // }

  let  name="John doe", email="johndoe@yahoo.com", phone="985742045", password="67890" 
  // const { name, email, phone, password } = state;

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="text-white h-[70vh] w-[30vw] bg-gradient-to-br from-gray-800 to-gray-600 p-8 rounded-lg shadow-xl flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-500 mb-6 flex items-center justify-center text-4xl font-bold">
          <span>{name.charAt(0)}</span>{" "}
          {/* Placeholder for a profile picture */}
        </div>
        <h2 className="text-3xl mb-2 font-semibold">{}</h2>

        <div className="space-y-4 w-full">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-700 rounded-lg shadow-md">
            <span className="font-semibold">Name:</span>
            <span className="text-gray-200">{name} </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-gray-700 rounded-lg shadow-md">
            <span className="font-semibold">Email:</span>
            <span className="text-gray-200">{email}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-gray-700 rounded-lg shadow-md">
            <span className="font-semibold">Mobile:</span>
            <span className="text-gray-200">{phone}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-gray-700 rounded-lg shadow-md">
            <span className="font-semibold">Password:</span>
            <span className="text-gray-200">{password}</span>
          </div>
        </div>
        <div className="mt-3">
          <button
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false)
              navigate("/login");
            }}
            className="px-4 py-3 text-xl text-white bg-red-600 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
