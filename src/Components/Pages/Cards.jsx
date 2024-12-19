import React, { useEffect, useState } from "react";
import AxiosInstance from "../../API/AxiosInstace";
import Card from "./Card";
import { Circles } from "react-loader-spinner";

const Cards = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const response = await AxiosInstance.get("products");
      setState(response.data);      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);  

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    )
  }
    return (
      <div className="flex justify-center align-center flex-wrap bg-slate-900">

        {state.map((product) => (        
          <Card key={product.id} product={ {...product,rating:product.rating.rate}} />
        ))}
      </div>
    );
};

export default Cards;
