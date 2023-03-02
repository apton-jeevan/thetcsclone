import React from 'react'
import "./Discovertcsdiff.css"
import "../../App.css"
import { data } from "./Discovertcsdata"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Discovertcsdiff() {
    return (
        <div>
            <div className="discovertcs container1">
                <h2 className="row row1">Discover the TCS difference </h2>
                <div className="scaledcarousel">
                    <OwlCarousel className='owl-theme' dots={false} items={1} nav animateOut={true}>
                        {data.map((data) => {
                            return (<div className='item' key={data.description}>
                                <div className="carousel" style={{ maxHeight: "757px" ,width:"100%" }}>
                                    <img src={data.imgurl} ></img>

                                    <div className="row2 containerpadleft20">
                                        <div className="row">
                                            <h5>{data.description}</h5>
                                        </div>
                                        <div className="row">
                                            <p><b>{data.btntxt}</b></p>
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
