import React from 'react'
import "./Discovertcsdiff.css"
import "../../App.css"
import { discoverdata } from "./Discovertcsdata"


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Discovertcsdiff() {

    return (
        <div>
            <div className="discovertcs ">
                <h2 className="row row1">Discover the TCS difference </h2>
                <div className="scaledcarousel">
                    <OwlCarousel className='owl-theme' dots={false} items={1} nav navText={[
                        '<i class="fa-solid fa-circle-arrow-left"></i>',
                        '<i class="fa-solid fa-circle-arrow-right"></i>'
                    ]}>
                        {discoverdata.map((data) => {
                            return (<div className='item' key={data.id}>
                                <div className="carousel" >
                                    <div className="contentOnHover">
                                        <img src={data.imgurl}></img>
                                        <div className="mytext ">
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
                                                <h5 className="title ">{data.description}</h5>
                                            </div>
                                            <button className="myherobutton btn btn-outline-secondary">
                                                <a className='btntext' href="https://www.tcs.com/who-we-are/newsroom/press-release/tcs-named-world-most-admired-companies-list-fortune-magazine">
                                                    {data.btntxt}
                                                </a>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>)
                        })
                        }
                    </OwlCarousel>
                </div>

            </div>
        </div>
    )
}
