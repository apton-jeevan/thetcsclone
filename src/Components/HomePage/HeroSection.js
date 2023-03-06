import React from 'react'
import "./HeroSection.css"
import { herodata } from "./HeroSectionData.js"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HeroSection() {
    return (

        <div className="herosection" >
            <div className="container1">
            <OwlCarousel className='owl-theme' dots={false} items={1} nav  autoplay >
                        {herodata.map((data) => {
                            return (<div className='item' key={data.heading}>
                                <div className="carousel" >
                                <h2 className="heroheading">{data.heading}</h2>
                                <div className="contentOnHover">
                                    <img src={data.imgurl}></img>
                                    <div className="mytext ">
                                        <p className="title">{data.title}</p>
                                        <button className="myherobutton">
                                            <a className ='btntext'href="https://www.tcs.com/who-we-are/newsroom/press-release/tcs-named-world-most-admired-companies-list-fortune-magazine">
                                             {data.button}
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

    )
}

{/* <h2 className="row heroheading">{data.heading}</h2>
                                <div className="contentOnHover">
                                    <img src={data.imgurl}></img>
                                    <div className="row ">
                                        <p className="title">{data.title}</p>
                                        <button className="myherobutton">
                                            <a href="https://www.tcs.com/who-we-are/newsroom/press-release/tcs-named-world-most-admired-companies-list-fortune-magazine">
                                                {data.button}
                                            </a>
                                        </button>
                                    </div>
                                </div> */}