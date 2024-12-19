import React from "react";
import { useLocation } from "react-router";

const Footer = () => {
  let location = useLocation().pathname;
  const paths = [
    "/home",
    "/men",
    "/women",
    "/jewelery",
    "/electronics",
  ];
  if (!paths.includes(location)) {
    return null;
  }

  return (
    <>
      <div className="bg-slate-700 text-center h-[8vh] flex justify-center items-center text-white text-lg ">
        <p>&copy;copyrights - All rights reserverd</p>
      </div>
    </>
  );
};

export default Footer;
