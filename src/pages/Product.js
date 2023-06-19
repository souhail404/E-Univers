import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PrdsImages from "../components/Sliders/PrdsImages";
import TestimonialsOverviewCard from "../components/Testimonials/TestimonialsOverviewCard";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import PrdtCardHoriz from "../components/ProductCard/PrdtCardHoriz";

const Product = (props) => {
  const [data, setData] = useState();
  const [simPrdts, setSimPrdts] = useState();
  const { productId } = useParams();

  useEffect(()=>{
      const dataFetch = async () => {
        const data = await (
          await fetch(
            `https://dummyjson.com/products/${productId}`
          )
        ).json();

        const simData = await (
          await fetch(
            `https://dummyjson.com/products/category/${data.category}?limit=5`
          )
        ).json();

      // set state when the data received
      console.log()
      setData(data);
      setSimPrdts(simData.products);
    };

    dataFetch();
  }, [productId])


  return (
      <div className="product-page-layout"> 
        <section className="product-data-sec bg-sec-light">
          <div className="sec-container">
              <div className="left-wrpr">
                  {data &&  <PrdsImages images={data.images}/> }
              </div>
              <div className="right-wrpr">
                  {data &&  <PrdsInfos data={data}/> }
              </div>
          </div>
        </section>

        <section className="product-sidebar bg-sec-light">
            <div className="prd-page-sidebar-container">
              <div className="header">
                <h3 className="txt">Similar products</h3>
              </div>
              <div className="content">
                <div className="similar-prds-wrpr">
                  {simPrdts &&
                    simPrdts.map((prd , i)=>{
                      return <PrdtCardHoriz className='sim-prd-el' key={i} product={prd} />
                    })
                  }
                  
                </div>
              </div>
            </div>
        </section>

        <section className="product-more-data bg-sec-light"> 
            <div className="mrdt-el prd-desc-wrpr">
                <div className="header">
                  <h3 className="txt">Product description</h3>
                </div>
                <div className="content">
                  <p><i><strong>Introducing the iPhone 9</strong></i> – the ultimate phone for the modern-day user. With its sleek design, top-of-the-line features, and intuitive user interface, this phone is the perfect companion for anyone looking to stay connected and productive on the go. Whether you're browsing the web, streaming content, or sending emails, the iPhone 9 delivers exceptional performance and style every time. Upgrade your phone game today with the iPhone 9 – <i><strong>you won't regret it!</strong></i></p><p>This device boasts a crisp and clear display, robust battery life, and lightning-fast speed</p><p>the ultimate phone for anyone looking for a stunning display, lightning-fast performance, and top-of-the-line features. This phone packs a powerful punch with its cutting-edge technology, ensuring smooth and seamless usage every time.</p>              
                </div>
            </div>
        </section>

        <section className="product-testimonials bg-sec-light">
            <div className="testimonials-wrapper">
                <div className="header">
                  <p className="txt">Product reviews</p>
                </div>
                <div className="content">
                    <TestimonialsOverviewCard rate={4.3}/>
                    <div className="testimonials-listing">
                      <TestimonialCard className="prd-page--testimonilas-cars" rate={5} title='cool product' comment="iphone 9 is exactly what I've been looking for." name='Noura' date='08-05-2023' /> 
                      <TestimonialCard className="prd-page--testimonilas-cars" rate={5} title='I really loved it' comment="Everyone’s on the same page. Many of our people are not very organized naturally, so iphone 9 is a godsend!" name='Goden' date='11-05-2023' /> 
                      <TestimonialCard className="prd-page--testimonilas-cars" rate={5} title='thats amzing' comment="With iphone 9, we have finally accomplished things that have been waiting forever to get done." name='Joe' date='28-06-2023' /> 
                    </div>
                </div>
              
            </div>
        </section>
      
      </div>
  )
}

const PrdsInfos = (props) => {
  return(
    <div className="info-wrpr">
      <div className="stock">
        <p>{props.data.stock}</p>
      </div>
      <div className="name">
        <p>{props.data.title}</p>
      </div>
      <div className="">
        <p>{props.data.description}</p>
      </div>
      <div className="">
        <p>{props.data.price} Dhs</p>
      </div>
    </div>
  )
}

export default Product