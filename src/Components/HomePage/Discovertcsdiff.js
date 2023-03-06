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
            <div className="discovertcs container1">
                <h2 className="row row1">Discover the TCS difference </h2>
                <div className="scaledcarousel">
                    <OwlCarousel className='owl-theme' dots={false} items={1} nav>
                        {discoverdata.map((data) => {
                            return (<div className='item' style={{ height: "532px" }} key={data.id}>
                                <div className="carousel" >
                                    <div className="contentOnHover">
                                        <img src={data.imgurl}></img>
                                        <div className="mytext ">
                                            <div className="col-4">
                                                <h5 className="title ">{data.description}</h5>
                                            </div>
                                            <button className="myherobutton">
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
