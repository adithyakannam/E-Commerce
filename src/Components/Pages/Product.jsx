import React, { useContext } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
import { OrderContext } from "../../Context/OrderContext";
import { FaRegStar } from "react-icons/fa";

const Product = () => {
  let location = useLocation().state;
  const { title, category, image, price, rating, description } = location;

  let { orderCount, setOrderCount } = useContext(OrderContext);

  const addToCart = (product) => {
    const existingProduct = orderCount.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.count += 1;
      setOrderCount([...orderCount]);
    } else {
      setOrderCount([...orderCount, { ...product, count: 1 }]);
    }
    
  };

  return (
    <div className="w-full h-[90vh] overflow-y-hidden font-barlow">
      <div className="w-full border-3 border-white flex justify-around items-stretch h-full ">
        <div className=" w-[50%] flex justify-center items-center bg-white p-16">
          <img src={image} alt={title} className="w-[60%]" />
        </div>
        <div className="h-[90vh] w-[50%]  px-10  text-white flex flex-col justify-around items-start">
          <div>
            <p className="text-xl text-blue-300 underline">{category}</p>
            <h1 className="text-[3rem] mt-1 tracking-tight ">{title}</h1>
            <p className="text-xl mt-4 text-justify">{description}</p>
           {rating &&  <p className="text-3xl mt-5 flex items-center">{rating} <span className="ml-2"><FaRegStar/></span> </p>}
            <p className="text-5xl mt-3 text-red-400">$ {price}</p>
          </div>
          <div className="flex justify-around items-center my-2 w-[400px] ">
            <NavLink to="/address">
              <button className="px-5 py-4 text-xl  rounded-lg text-white shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500">
                <b>Buy Now</b>
              </button>
            </NavLink>
            <button
                onClick={() => {
                  location.count = 1;
                  return addToCart(location);
                }}
              className="px-5 py-4 rounded-lg text-white text-xl  shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500"
            >
              <b>Add to Cart</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
