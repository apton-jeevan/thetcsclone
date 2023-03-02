import React, { useEffect, useState } from 'react'
import "./HomePgAbout.css"
import "../../App.css"
import MyOwlCarousel from './MyOwlCarousel/MyOwlCarousel'


export default function HomePgAbout() {
  const [isScreen, setIsScreen] = useState(3);

  //equivalent to media queries
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1601) {
        setIsScreen(3);
      }
      if (window.innerWidth < 992) {
        setIsScreen(1);
      }
      else if (window.innerWidth < 1600) {
        setIsScreen(2);
      }


    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      {/* who we are */}
      <div className="whoweare  container1">
        <div className="row align-items-center justify-content-end outercontent">
          <div className="content col-xl-6">
            <div className="text row align-items-center ">
              <div className="mytextbox">
                <p className="myheading">Who We Are</p>
                <h3 className="myheading1">We build greater futures through innovation and <br></br>collective knowledge.</h3>
                <div className="para"><p>TCS is an IT services, consulting and business solutions organization that has been partnering with many of the world's largest businesses in their transformation journeys for over 50 years. </p>
                  <p></p></div>
                <div>
                  <a className="gettoknow" href="https://www.tcs.com/what-we-do">Get to know us <i class="fa-solid fa-circle-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* whoweare*/}



      {/* //tcs carousel */}
      <div className="mytcscarousel">
        <div className="container1 carousel_outer ">
          <h2 className="heading">Belief in action</h2>

          <MyOwlCarousel dots={false} margin={15} items={isScreen} nav={true} />

        </div>
      </div>


      {/* what/why we do */}
      <div className="whatwedo container1">
        <div className="row align-items-center justify-content-start outercontent">
          <div className="content col-xl-6">
            <div className="text row align-items-center ">
              <div className="mytextbox">
                <p className="myheading">What we do</p>
                <h3 className="myheading1">TCS transforms businesses through<br></br>technology.</h3>
                <div className="para"><p>We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.</p>
                  <p></p></div>
                <div>
                  <a className="gettoknow" href="https://www.tcs.com/what-we-do">Get to know us <i class="fa-solid fa-circle-arrow-right"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* //what/whywedo */}



    </div >
  )
}

