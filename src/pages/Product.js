import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const [data, setData] = useState();
  const { productId } = useParams();

  useEffect(()=>{
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://dummyjson.com/products/${productId}`
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
    console.log(data)
  }, [])
  return (
    <div>
      {data && <div>{data.title}</div> }
    </div>
  )
}

export default Product