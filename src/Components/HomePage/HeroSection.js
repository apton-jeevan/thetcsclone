import React, { useRef, useState } from 'react';
import './HeroSection.css';
import { herodata } from './HeroSectionData.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import SwiperCore from 'swiper/core';
import { useEffect } from 'react';

SwiperCore.use([Navigation]);
export default function HeroSection() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1.5); // default to half view
    const [spaceBetween, setSpaceBetween] = useState(30); 

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);

    const handleSlideChange = (swiper) => {
        setSwiperIndex(swiper.realIndex);
    };

    const toggleAutoplay = () => {
        setAutoplayEnabled(!autoplayEnabled);
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1000) {
                setSpaceBetween(30)
                setSlidesPerView(1.5)
              } 
             
        
          if (window.innerWidth < 1000) {
            setSpaceBetween(0)
            setSlidesPerView(1)
          }
         
  
  
        }
  
        window.addEventListener('resize', handleResize);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  
    return (
        <div className="herosection">
            <div className="container1">
                <Swiper
                    ref={swiperRef}
                    navigation={{
                        prevEl: '.swiper-button-prev1',
                        nextEl: '.swiper-button-next1',
                    }}
                    loop={true}
                    spaceBetween={spaceBetween}
                    centeredSlides={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction:false  ,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                    slidesPerView={slidesPerView}
                >

                    {herodata.map((data) => {
                        return (
                            <SwiperSlide key={data.heading}>
                                <div className="item">
                                    <div className='heroContent'>
                                        <h2 className="heroheading">{data.heading}</h2>
                                        <div className="contentOnHover">

                                            <div className="mytext">
                                                <p className="title">{data.title}</p>
                                                <button className="myherobutton">
                                                    <a
                                                        className="btntext"
                                                        href="https://www.tcs.com/who-we-are/newsroom/press-release/tcs-named-world-most-admired-companies-list-fortune-magazine"
                                                    >
                                                        {data.button}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={data.imgurl} style={{minHeight:"300px",minWidth:"450px"}}></img>

                                </div>

                            </SwiperSlide>
                        );
                    })}

                    <div className="mynavbuttons">
                        <div onClick={toggleAutoplay}>
                            {autoplayEnabled ? <i className="fa-solid fa-pause mypauseplay"></i> : <i className="fa-solid fa-play"></i>}
                        </div>
                        <div className="swiper-button-next1 myprev" onClick={goNext}>
                            &rarr;
                        </div>
                        <div className="swiper-button-prev1 mynext " onClick={goPrev}>
                            &larr;
                        </div>

                    </div>


                    <div
                        className="autoplay-progress"
                        slot="container-end"

                    >
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>


    )
}
