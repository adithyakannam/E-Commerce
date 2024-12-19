import React, { useState } from "react";
import Carousell from "./Carousell";
import Cards from "./Cards";
import { useLocation } from "react-router";

const Home = () => {
  
  return (
    <>
      <Carousell />
      <Cards />
    </>
  );
};

export default Home;
