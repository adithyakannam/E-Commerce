import React, { useContext, useEffect } from "react";
import CountUp from "react-countup";
import { NavLink } from "react-router";
import { OrderContext } from "../../Context/OrderContext";

const Card = ({ product }) => {
  let {title, rating, price, image, description } = product;

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className=" font-barlow m-3 p-4 shadow-md bg-white min-h-[350px] h-[500px] w-[300px]"
      // data-aos="flip-left"
    >
      <NavLink to="/product" state={product}>
        <div className="flex py-10  h-[85%] flex-col justify-between items-center">
          <div className="flex justify-center item-center ">
            <img src={image} alt={title} className="w-[150px]" />
          </div>
          <div className="">
            <h1 className="text-2xl">{title.slice(0, 18)}</h1>
            <p className="text-xl">
              $<CountUp end={price} />
            </p>
            {rating && <p>{rating}⭐</p>}
            <p>
              {description.slice(0, 50) +
                (description.length > 50 ? "..." : "")}
            </p>
          </div>
        </div>
      </NavLink>
      <div className="flex justify-around items-center my-2 max-h-[20%] h-[15%]">
        <NavLink to="/address">
          <button
            className="p-1 h-[40px] w-[100px] rounded-lg text-white shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500"
            onClick={() => {
              product.count = 1;
              return addToCart(product);
            }}
          >
            <b>Buy Now</b>
          </button>
        </NavLink>
        <button
          onClick={() => {
            product.count = 1;
            return addToCart(product);
          }}
          className="p-1 h-[40px] w-[100px] rounded-lg text-white  shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          <b>Add to Cart</b>
        </button>
      </div>
    </div>
  );
};

export default Card;
