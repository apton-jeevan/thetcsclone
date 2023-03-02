import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { carouseldata } from './OwlCarouseData';
import "./MyOwlCarousel.css"
import React from 'react'

export default function MyOwlCarousel(props) {
  return (
    <div>
      <OwlCarousel className='owl-theme' dots={props.dots} margin={props.margin} nav={props.nav} items={props.items}>
        {carouseldata.map((data) => {
          return (<div className='item' key={data.id}>
            <div className="carouselcard" style={{ height: "552px" }}>
              <img src={data.imgurl} style={{ height: "552px" }}></img>

              <div className="row2 containerpadleft20">
                <div className="row">
                  <h1>{data.title}</h1>
                </div>
                <div className="row ">
                  <p>{data.description}</p>
                </div>
              </div>

              <div className="row row3 containerpadleft20">
                <p><b>Read More</b></p>
              </div>
            </div>

          </div>)
        })
        }
      </OwlCarousel>
    </div>
  )
}


