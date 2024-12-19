import React, { useEffect, useState } from 'react'
import { AccessoriesInstace } from '../../API/AxiosInstace'
import Card from '../Pages/Card'
import { Circles } from "react-loader-spinner";
import Spinner from '../Loading/Spinner';

const Electronics = () => {
    let [state,setState] = useState([])
    let [loading,setLoading] = useState(true)
    const  fetchApi =async ()=>{
        try {
            const x  = await AccessoriesInstace.get('products')
            setState(x.data.products); // Update state with fetched data
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    if(loading){
      return (
       <>
        <Spinner/>
       </>
      );
    }

  return (
    <div className='w-[100%] flex flex-wrap justify-center items-center bg-slate-900'>
      {
        state.map(product=>{
          return (<Card key={product.id} product={product}/>)
        })
      }
    </div>
  )
}

export default Electronics
