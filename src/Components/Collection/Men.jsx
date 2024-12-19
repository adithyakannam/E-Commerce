import React, { useEffect, useState } from "react";
import AxiosInstance from "../../API/AxiosInstace";
import Card from "../Pages/Card";
import Spinner from "../Loading/Spinner";

const Men = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const response = await AxiosInstance.get("/products");
      let data = response.data.filter((item) => {
        return item.category == "men's clothing";
      });
      setState(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  if(loading){
    return (
      <>
      <Spinner/>
      </>
    )
  }

  return (
    <div className="flex flex-wrap justify-center items-center bg-slate-900 min-h-[82vh] h-full">
      {state.map((product) => (
        <Card
          key={product.id}
          product={{ ...product, rating: product.rating.rate }}
        />
      ))}
    </div>
  );
};

export default Men;
