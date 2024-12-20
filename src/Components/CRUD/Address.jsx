import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router"; // Ensure correct import
import { DatabaseInstance } from "../../API/AxiosInstace";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import Modall from "../Loading/Modall";
import { OrderContext } from "../../Context/OrderContext";

const Address = () => {
  const [state, setState] = useState([{  name : "John doe", contact :"47559810", pincode:"205474", email:"johndoe@yaahoo.com", address:"12th Avenue, New York" }]);
  const [showModall, setShowModall] = useState({
    isVisible: false,
    message: "",
  });

  const { orderCount } = useContext(OrderContext);

  let deliveryCheck = () => {
    if (orderCount.length === 0) {
      setShowModall({ isVisible: true, message: "NO Items in your cart" });
      // alert("No items in your cart")
    } else {
      setShowModall({ isVisible: true, message: "Your order is placed sucessfull" });
    }
  };

  // const fetchDb = async () => {
  //   try {
  //     const response = await DatabaseInstance.get("address");
  //     setState(response.data);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDb();
  // }, []);

  const deleteUser = async (id) => {
    setShowModall({ isVisible: false, message: "" });
    setShowModall({isVisible:true,message:"feature is disable due to site under maintance"})
    // try {
    //   await DatabaseInstance.delete(`address/${id}`);
    //   setState(prev=>prev.filter(obj => obj.id !== id))
    //   setShowModall({isVisible:true,message:"address is deleted"})
    // } catch (error) {
    //   console.log("Error deleting user:", error);
    // }
  };

  const handleCloseModal = () => {
    setShowModall({ isVisible: false, message: "" });
  };

  return (
    <div>
      <div className="bg-slate-700 p-5 text-white flex justify-around items-center h-[10vh]  sticky top-0">
        <div className="w-1/5 text-4xl text-white font-medium">
          <NavLink to="/home">LOTUS FASHION</NavLink>
        </div>
        <div className="w-2/5 text-xl">
          <h1>ADDRESS</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        {state.map(({ id, name, contact, pincode, email, address },index) => (
          <div
            key={index}
            className="w-4/6 m-1 rounded-md px-10 py-10 flex justify-around items-center bg-slate-100 "
          >
            <div className="w-2/6">
              <p>{name}</p>
              <p>{email}</p>
              <p>{contact}</p>
              <p>{address}</p>
              <p>{pincode}</p>
            </div>
            <div className="w-1/6 flex flex-col  justify-around items-center">
              {/* <div className=""> */}
              <NavLink>
                <button
                  className="text-5xl w-[80px] flex justify-center m-3 bg-blue-500 text-white rounded-lg "
                  onClick={deliveryCheck}
                >
                  <span className="">
                    <CiDeliveryTruck />
                  </span>
                </button>
              </NavLink>
              {/* </div> */}

              <div>
                <button
                  onClick={() => deleteUser(id)}
                  className="border p-4 rounded-xl bg-red-500 text-white"
                >
                  <AiOutlineDelete />
                </button>
                <NavLink
                  to="/edit"
                  state={{ id, name, contact, pincode, email, address }}
                >
                  <button className="border p-4 rounded-xl bg-blue-500 text-white">
                    <FaRegEdit />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        <div>
          <NavLink to="/newaddress">
            <button className="border p-2 rounded-xl bg-blue-500 text-white flex items-center justify-around">
              <span className="text-2xl m-2">
                <IoMdAddCircle />
              </span>
              Add Address
            </button>
          </NavLink>
        </div>
      </div>
      {showModall.isVisible && (
        <Modall
          message={{ title: "message", message: showModall.message }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Address;
