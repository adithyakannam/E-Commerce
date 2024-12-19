import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import "./Nav";
import { BsCart4 } from "react-icons/bs";
import { OrderContext } from "../../../Context/OrderContext";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  const location = useLocation().pathname;
  const { orderCount } = useContext(OrderContext);
  const name = sessionStorage.getItem("name")
  
  let totalCount = orderCount.reduce(
    (total, item) => total + item.count,
    0
  );
  
  const paths = [
    "/home",
    "/men",
    "/women",
    "/jewelery",
    "/edit",
    "/electronics",
    "/cart",
    "/profile",
    "/product"
  ];
  if (!paths.includes(location)) {
    return null;
  }


  return (
    <nav className=" flex nav justify-around items-center bg-slate-800 min-h-[10vh] max-h-[15vh] sticky top-0 z-10 font-barlow">
      {/* https://clipart-library.com/new_gallery/26-267467_big-image-lotus-flower-png-vector.png */}
      <div className="text-[30px] text-white font-medium">
        <NavLink to="/home">LOTUS FASHION</NavLink>
      </div>
      <ul className="text-white flex justify-around items-center ul text-[20px] w-2/6 h-full ">
        <li>
          <NavLink to="/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/women">Women</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/jewelery">Jewelery</NavLink>
        </li>
      </ul>
      <div className="text-xl h-full text-white  flex flex-row justify-between items-center w-1/6">
        <div className="">
          <NavLink to='/cart'>
            <div className="flex">
            <span className="text-2xl">
              <BsCart4 />
            </span>
            <span className="text-sm px-1">{totalCount}</span>
            </div>
          </NavLink>
        </div>
        <div className="">
        <NavLink to='/profile'>
          <span className="text-4xl flex flex-col items-center">
            <FaRegUserCircle />
            <span className="text-lg">{name}</span>
          </span>
        </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
