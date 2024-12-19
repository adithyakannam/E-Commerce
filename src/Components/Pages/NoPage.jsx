import React from "react";
import { NavLink } from "react-router";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center mt-10 text-xl text-white ">
      <h1> Looking for something?</h1>
      <p>
        {" "}
        We're sorry. The Web address you entered is not a functioning page on
        our site.
      </p>
      <p>
        Go to{" "}
        <span className="underline underline-offset-1  text-teal-600 mt-3">
          <NavLink to="/home">Home</NavLink>
        </span>
        {" "}page
      </p>
    </div>
  );
};

export default NoPage;
