import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { carouseldata } from './OwlCarouseData';
import "./MyOwlCarousel.css"
import React from 'react'

export default function MyOwlCarousel(props) {
  return (
    <div>
      <OwlCarousel className='owl-theme' dots={props.dots} margin={props.margin} nav={props.nav} items={props.items} navText={[
                        '<i class="fa-solid fa-circle-arrow-left"></i>',
                        '<i class="fa-solid fa-circle-arrow-right"></i>'
                    ]}>
        {carouseldata.map((data) => {
          return (<div className='item ' key={data.id}>
            <div className="carouselcard "style={{maxHeight:"650px" ,maxWidth:"550px"}}>
              <img src={data.imgurl} style={{maxHeight:"600px",maxWidth:"500px"}}></img>

              <div className="row2 containerpadleft20">
                <div className="row">
                  <h1>{data.title}</h1>
                </div>
                <div className="row ">
                  <p>{data.description}</p>
                </div>
              </div>

              <div className="row row3 containerpadleft20">
               <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities/case-study/final-customer-check-framework-tse-improve-outcome"> <p><span class="bookonimg"></span><b>Read More</b></p> </a>
              </div>
            </div>

          </div>)
        })
        }
      </OwlCarousel>
    </div>
  )
}


