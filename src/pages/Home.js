import React, { useEffect, useState } from 'react'
import { BannerElem, Banner } from '../components/Sliders/Banner'
import { Carousel, CarouselElem } from '../components/Sliders/Carousel'
import ProductCard from '../components/ProductCard/ProductCard'


const Home = () => {

  return (
    <>
      <section className='m-sec hero-slider-sec'>
          <div className='sec-container'>
            <Banner className='hero-slider--home'>
              <BannerElem laimg='b1big.png' smimg='b1small.png' />
              <BannerElem laimg='b2big.png' smimg='b2small.png' />
              <BannerElem laimg='b3big.png' smimg='b3small.png' />
            </Banner>
          </div>
      </section>

      <ProductsListingSec collection='smartphones' />

      <ProductsListingSec collection="laptops" />
    </>
  )
}


const ProductsListingSec = (props) => {
  const [data, setData] = useState();

  useEffect(()=>{
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://dummyjson.com/products/category/${props.collection}`
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, [])


  return (
     <section className="m-sec product-listing-sec bg-sec-light">
        <div className="sec-container">
            <div className="sec-heading">
                <h3 className="txt"> {props.collection} </h3>
            </div>
            <div className="sec-content">
              {data && <Carousel> {
                  data.products.map((product, index)=>{
                    return (
                      <CarouselElem key={index} > 
                        <ProductCard productData={product} />
                      </CarouselElem> 
                    );
                  })
                } </Carousel>}
            </div>
        </div>
      </section>
  )
}

export default Home