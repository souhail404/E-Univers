import React from 'react'
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

      <section className="m-sec product-listing">
        <div className="sec-container">
            <div className="sec-heading">
                <h3 className="txt"> best sellers </h3>
            </div>
            <div className="sec-content">
                <Carousel >
                <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem> 
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                </Carousel>
            </div>
        </div>
      </section>

      <section className="m-sec product-listing">
        <div className="sec-container">
            <div className="sec-heading">
                <h3 className="txt"> Top deals </h3>
            </div>
            <div className="sec-content">
                <Carousel >
                <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem> 
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                  <CarouselElem>
                    <ProductCard />
                  </CarouselElem>
                </Carousel>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home