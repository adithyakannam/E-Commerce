import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import { OrderContext } from "../../Context/OrderContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router";
import Modall from "../Loading/Modall";

const initialState = { orderCount: [] };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        orderCount: state.orderCount.map((item, index) =>
          index === action.id ? { ...item, count: item.count + 1 } : item
        ),
      };
    case "decrement":
      const updatedOrderCount = state.orderCount
        .map((item, index) =>
          index === action.id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);

      return {
        ...state,
        orderCount: updatedOrderCount,
      };
    default:
      return state;
  }
}

const Cart = () => {
  let { orderCount, setOrderCount } = useContext(OrderContext);
  let [state, dispatch] = useReducer(reducer, { orderCount });
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setOrderCount(state.orderCount);
  }, [state.orderCount]);

  let totalAmount = state.orderCount.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const proceedItems = () => {
    if (state.orderCount.length === 0) {
      setShowModal(true);
      setTimeout(() => {
        closeModal();
      }, 4000);
    } else {
      navigate("/address");
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex ">
      <div className="w-5/6 mt-2 flex justify-start items-center p-2 flex-wrap">
        {state.orderCount.map((item, index) => {
          let { id, title, rating, price, image, description, count } = item;

          return (
            <div
              key={index}
              className="p-5 shadow-md bg-white m-2 w-[290px] max-h-[500px] h-[fit-content] flex flex-col justify-between items-center "
              // data-aos="flip-left"
            >
              <div className="w-full flex justify-center items-center">
                <img src={image} alt={title} className="w-[150px] " />
              </div>
              <div>
                <h1 className="text-3xl">{title.slice(0, 20)}</h1>
                <p className="text-xl m-1">${price}</p>
              </div>
              <div className="h-[45px] w-[90%] flex justify-around items-center text-white text-2xl">
                <button
                  className=" p-2 w-[50px] bg-slate-800 rounded-l-full h-full flex justify-center items-center"
                  onClick={() => dispatch({ type: "decrement", id: index })}
                >
                  <span className="">
                    <FaMinus />
                  </span>
                </button>
                <span className="text-black">{count}</span>
                <button
                  className=" p-2 w-[50px] bg-slate-800 rounded-r-full h-full flex justify-center items-center"
                  onClick={() => dispatch({ type: "increment", id: index })}
                >
                  <span className="">
                    <FaPlus />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/6 p-5 bg-slate-100 h-[90vh] mt-[10vh] fixed top-0 right-0 ">
        <h2 className="text-2xl text-black ">
          Total Amount: <br /> ${totalAmount.toFixed(2)}
        </h2>

        <button
          className="text-[15px] p-2 w-[150px] m-3 border-2 font-bold border-black  bg-blue-500 text-white rounded-2xl"
          onClick={proceedItems}
        >
          <span className="">
            Proceed to Buy
          </span>
        </button>
      </div>
      {showModal && <Modall message={{title:"Add Items",message:"There are no items in your cart to proceed!"}} />}
    </div>
  );
};

export default Cart;
