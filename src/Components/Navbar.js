import React from 'react'
import "./Navbar.css"
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    //for changing all rightmega to none except the first one
    let i;
    for (i = 1; i < 5; i++) {
      document.getElementById("r" + i).style = "display:none"
    }
    document.getElementById("r0").style = "display:flex"

    let leftmega = document.getElementsByClassName("changemega");
    let arrleft = Array.from(leftmega);
    //for changing rightmega when hovered on its respective leftmega
    arrleft.forEach((element, index) => {
      element.addEventListener("mouseover", () => {

        let right = document.getElementsByClassName("rightmega");
        let arrright = Array.from(right);
        arrright.forEach((e) => {
          if (e.id != "r" + index) {
            e.style = "display:none";
          }
          else {
            e.style = "display:flex";
          }
        })

      })

    })
  }, [])
  // useEffect(() => {
  //   //for changing all rightmega to none except the first one
  //   let j;
  //   for (j = 1; j < 5; j++) {
  //     document.getElementById("s" + j).style = "display:none"
  //   }
  //   document.getElementById("s0").style = "display:flex"

  //   let leftmega = document.getElementsByClassName("changemega");
  //   let arrleft = Array.from(leftmega);
  //   //for changing rightmega when hovered on its respective leftmega
  //   arrleft.forEach((element, index) => {
  //     element.addEventListener("mouseover", () => {

  //       let right = document.getElementsByClassName("rightmega");
  //       let arrright = Array.from(right);
  //       arrright.forEach((e) => {
  //         if (e.id != "s" + index) {
  //           e.style = "display:none";
  //         }
  //         else {
  //           e.style = "display:flex";
  //         }
  //       })

  //     })

  //   })
  // }, [])
  // useEffect(() => {
  //   //for changing all rightmega to none except the first one
  //   let k;
  //   for (k = 1; k < 5; k++) {
  //     document.getElementById("t" + k).style = "display:none"
  //   }
  //   document.getElementById("t0").style = "display:flex"

  //   let leftmega = document.getElementsByClassName("changemega");
  //   let arrleft = Array.from(leftmega);
  //   //for changing rightmega when hovered on its respective leftmega
  //   arrleft.forEach((element, index) => {
  //     element.addEventListener("mouseover", () => {

  //       let right = document.getElementsByClassName("rightmega");
  //       let arrright = Array.from(right);
  //       arrright.forEach((e) => {
  //         if (e.id != "t" + index) {
  //           e.style = "display:none";
  //         }
  //         else {
  //           e.style = "display:flex";
  //         }
  //       })

  //     })

  //   })
  // }, [])
  // useEffect(() => {
  //   //for changing all rightmega to none except the first one
  //   let l;
  //   for (l = 1; l < 5; l++) {
  //     document.getElementById("u" + l).style = "display:none"
  //   }
  //   document.getElementById("u0").style = "display:flex"

  //   let leftmega = document.getElementsByClassName("changemega");
  //   let arrleft = Array.from(leftmega);
  //   //for changing rightmega when hovered on its respective leftmega
  //   arrleft.forEach((element, index) => {
  //     element.addEventListener("mouseover", () => {

  //       let right = document.getElementsByClassName("rightmega");
  //       let arrright = Array.from(right);
  //       arrright.forEach((e) => {
  //         if (e.id != "u" + index) {
  //           e.style = "display:none";
  //         }
  //         else {
  //           e.style = "display:flex";
  //         }
  //       })

  //     })

  //   })
  // }, [])



  return (
    <nav className="myNavbar">
      <img className="brand-logo-img" src="https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg" alt="Tata Consultancy Services" title="Tata Consultancy Services" />
      <ul className="myNavLinkSet">
        <div className="megamenu">
          <li className="arrowup">
            What we do
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega">Overview <i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Industries<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Services <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Products and Platforms<i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Research & Innovation <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="r0" className="rightmega">
              <h3 className="rightmega_r0_heading">TCS is here to make a difference through technology.</h3>
              <p className="rightmega_r0_title">Leading the way in innovation for over 50 years, we build greater futures for businesses across multiple industries and 131 countries.</p>
              <div className="mybtn">
                <a href="https://www.tcs.com/what-we-do">Discover all solutions</a>
              </div>
            </div>
            <div className="rightmega" id="r1">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/banking">Banking</a>
                  <a href="https://www.tcs.com/what-we-do/industries/capital-markets">Capital Markets</a>
                  <a href="https://www.tcs.com/what-we-do/industries/consumer-goods-distribution">Consumer Goods and Distribution</a>
                  <a href="https://www.tcs.com/what-we-do/industries/communications-media-information-services">Communications, Media, and Information Services</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/education">Education</a>
                  <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities">Energy, Resources, and Utilities</a>
                  <a href="https://www.tcs.com/what-we-do/industries/healthcare">Healthcare</a>
                  <a href="https://www.tcs.com/what-we-do/industries/high-tech">High Tech</a>
                  <a href="https://www.tcs.com/what-we-do/industries/insurance">Insurance</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/life-sciences"></a>
                  <a href="https://www.tcs.com/what-we-do/industries/manufacturing">Manufacturing</a>
                  <a href="https://www.tcs.com/what-we-do/industries/public-services">Public Services</a>
                  <a href="https://www.tcs.com/what-we-do/industries/retail">Retail </a>
                  <a href="https://www.tcs.com/what-we-do/industries/travel-and-logistics">Travel and Logistics</a>
                </div>
              </div>


            </div>
            <div className="rightmega" id="r2">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cloud">Cloud</a>
                  <a href="https://www.tcs.com/what-we-do/services/cognitive-business-operations">Cognitive Business Operations</a>
                  <a href="https://www.tcs.com/what-we-do/services/consulting">Consulting</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cybersecurity">Cybersecurity</a>

                  <a href="https://www.tcs.com/what-we-do/services/data-and-analytics">Data and Analytics</a>

                  <a href="https://www.tcs.com/what-we-do/services/enterprise-solutions">Enterprise Solutions</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/iot-digital-engineering">IoT and Digital Engineering</a>

                  <a href="https://www.tcs.com/what-we-do/services/tcs-interactive">TCS Interactive</a>

                  <a href="https://www.tcs.com/what-we-do/services/sustainability-services">Sustainability Services</a>
                </div>
              </div>

            </div>
            <div className="rightmega" id="r3">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-add">TCS ADD</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">TCS BANCS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bfsi-platforms">TCS BFSI Platforms</a>
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-chroma">TCS CHROMA™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-customer-intelligence-insights">TCS Customer Intelligence &amp; Insights™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-erp-on-cloud">TCS ERP on Cloud</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://digitate.com/">ignio™</a>

                  <a  href="https://www.tcsion.com/dotcom/TCSSMB/">TCS iON™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-hobs">TCS HOBS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-intelligent-urban-exchange">TCS Intelligent Urban Exchange™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore">TCS OmniStore™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-optumera">TCS Optumera™</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-tap">TCS TAP™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/quartz">Quartz™ – The Smart Ledgers™</a>

                  <a  href="https://mastercraft.tcsapps.com/">TCS MasterCraft™</a>

                  <a  href="https://www.jile.io/">Jile™</a>

                </div>
              </div>

            </div>
            <div className="rightmega" id="r4">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/research">TCS Research</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/pace-innovation">TCS Pace™</a>
                </div>
              </div>



            </div>



          </div>

        </div><div className="megamenu">
          <li>
            Who we are
            <span class="nav-underline"></span>
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega">Overview<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">About Us<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Leadership <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">In the news <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="s0" className="rightmega">
              <h3 className="rightmega_r0_heading">TCS is here to make a difference through technology.</h3>
              <p className="rightmega_r0_title">Leading the way in innovation for over 50 years, we build greater futures for businesses across multiple industries and 131 countries.</p>
              <div className="mybtn">
                <a href="https://www.tcs.com/what-we-do">Discover all solutions</a>
              </div>
            </div>
            <div className="rightmega" id="s1">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/banking">Banking</a>
                  <a href="https://www.tcs.com/what-we-do/industries/capital-markets">Capital Markets</a>
                  <a href="https://www.tcs.com/what-we-do/industries/consumer-goods-distribution">Consumer Goods and Distribution</a>
                  <a href="https://www.tcs.com/what-we-do/industries/communications-media-information-services">Communications, Media, and Information Services</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/education">Education</a>
                  <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities">Energy, Resources, and Utilities</a>
                  <a href="https://www.tcs.com/what-we-do/industries/healthcare">Healthcare</a>
                  <a href="https://www.tcs.com/what-we-do/industries/high-tech">High Tech</a>
                  <a href="https://www.tcs.com/what-we-do/industries/insurance">Insurance</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/life-sciences"></a>
                  <a href="https://www.tcs.com/what-we-do/industries/manufacturing">Manufacturing</a>
                  <a href="https://www.tcs.com/what-we-do/industries/public-services">Public Services</a>
                  <a href="https://www.tcs.com/what-we-do/industries/retail">Retail </a>
                  <a href="https://www.tcs.com/what-we-do/industries/travel-and-logistics">Travel and Logistics</a>
                </div>
              </div>


            </div>
            <div className="rightmega" id="s2">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cloud">Cloud</a>
                  <a href="https://www.tcs.com/what-we-do/services/cognitive-business-operations">Cognitive Business Operations</a>
                  <a href="https://www.tcs.com/what-we-do/services/consulting">Consulting</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cybersecurity">Cybersecurity</a>

                  <a href="https://www.tcs.com/what-we-do/services/data-and-analytics">Data and Analytics</a>

                  <a href="https://www.tcs.com/what-we-do/services/enterprise-solutions">Enterprise Solutions</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/iot-digital-engineering">IoT and Digital Engineering</a>

                  <a href="https://www.tcs.com/what-we-do/services/tcs-interactive">TCS Interactive</a>

                  <a href="https://www.tcs.com/what-we-do/services/sustainability-services">Sustainability Services</a>
                </div>
              </div>

            </div>
            <div className="rightmega" id="s3">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-add">TCS ADD</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">TCS BANCS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bfsi-platforms">TCS BFSI Platforms</a>
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-chroma">TCS CHROMA™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-customer-intelligence-insights">TCS Customer Intelligence &amp; Insights™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-erp-on-cloud">TCS ERP on Cloud</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://digitate.com/">ignio™</a>

                  <a  href="https://www.tcsion.com/dotcom/TCSSMB/">TCS iON™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-hobs">TCS HOBS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-intelligent-urban-exchange">TCS Intelligent Urban Exchange™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore">TCS OmniStore™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-optumera">TCS Optumera™</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-tap">TCS TAP™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/quartz">Quartz™ – The Smart Ledgers™</a>

                  <a  href="https://mastercraft.tcsapps.com/">TCS MasterCraft™</a>

                  <a  href="https://www.jile.io/">Jile™</a>

                </div>
              </div>

            </div>



          </div>

        </div><div className="megamenu">
          <li className="arrowup">
            Insights
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega">Overview <i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Industries<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Services <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Products and Platforms<i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Research & Innovation <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="t0" className="rightmega">
              <h3 className="rightmega_r0_heading">TCS is here to make a difference through technology.</h3>
              <p className="rightmega_r0_title">Leading the way in innovation for over 50 years, we build greater futures for businesses across multiple industries and 131 countries.</p>
              <div className="mybtn">
                <a href="https://www.tcs.com/what-we-do">Discover all solutions</a>
              </div>
            </div>
            <div className="rightmega" id="t1">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/banking">Banking</a>
                  <a href="https://www.tcs.com/what-we-do/industries/capital-markets">Capital Markets</a>
                  <a href="https://www.tcs.com/what-we-do/industries/consumer-goods-distribution">Consumer Goods and Distribution</a>
                  <a href="https://www.tcs.com/what-we-do/industries/communications-media-information-services">Communications, Media, and Information Services</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/education">Education</a>
                  <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities">Energy, Resources, and Utilities</a>
                  <a href="https://www.tcs.com/what-we-do/industries/healthcare">Healthcare</a>
                  <a href="https://www.tcs.com/what-we-do/industries/high-tech">High Tech</a>
                  <a href="https://www.tcs.com/what-we-do/industries/insurance">Insurance</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/life-sciences"></a>
                  <a href="https://www.tcs.com/what-we-do/industries/manufacturing">Manufacturing</a>
                  <a href="https://www.tcs.com/what-we-do/industries/public-services">Public Services</a>
                  <a href="https://www.tcs.com/what-we-do/industries/retail">Retail </a>
                  <a href="https://www.tcs.com/what-we-do/industries/travel-and-logistics">Travel and Logistics</a>
                </div>
              </div>


            </div>
            <div className="rightmega" id="t2">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cloud">Cloud</a>
                  <a href="https://www.tcs.com/what-we-do/services/cognitive-business-operations">Cognitive Business Operations</a>
                  <a href="https://www.tcs.com/what-we-do/services/consulting">Consulting</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cybersecurity">Cybersecurity</a>

                  <a href="https://www.tcs.com/what-we-do/services/data-and-analytics">Data and Analytics</a>

                  <a href="https://www.tcs.com/what-we-do/services/enterprise-solutions">Enterprise Solutions</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/iot-digital-engineering">IoT and Digital Engineering</a>

                  <a href="https://www.tcs.com/what-we-do/services/tcs-interactive">TCS Interactive</a>

                  <a href="https://www.tcs.com/what-we-do/services/sustainability-services">Sustainability Services</a>
                </div>
              </div>

            </div>
            <div className="rightmega" id="t3">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-add">TCS ADD</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">TCS BANCS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bfsi-platforms">TCS BFSI Platforms</a>
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-chroma">TCS CHROMA™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-customer-intelligence-insights">TCS Customer Intelligence &amp; Insights™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-erp-on-cloud">TCS ERP on Cloud</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://digitate.com/">ignio™</a>

                  <a  href="https://www.tcsion.com/dotcom/TCSSMB/">TCS iON™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-hobs">TCS HOBS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-intelligent-urban-exchange">TCS Intelligent Urban Exchange™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore">TCS OmniStore™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-optumera">TCS Optumera™</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-tap">TCS TAP™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/quartz">Quartz™ – The Smart Ledgers™</a>

                  <a  href="https://mastercraft.tcsapps.com/">TCS MasterCraft™</a>

                  <a  href="https://www.jile.io/">Jile™</a>

                </div>
              </div>

            </div>
            <div className="rightmega" id="t4">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/research">TCS Research</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/pace-innovation">TCS Pace™</a>
                </div>
              </div>



            </div>



          </div>

        </div><div className="megamenu">
          <li className="arrowup">
            Careers
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega">Overview <i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Industries<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega">Services <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Products and Platforms<i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega">Research & Innovation <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="u0" className="rightmega">
              <h3 className="rightmega_r0_heading">TCS is here to make a difference through technology.</h3>
              <p className="rightmega_r0_title">Leading the way in innovation for over 50 years, we build greater futures for businesses across multiple industries and 131 countries.</p>
              <div className="mybtn">
                <a href="https://www.tcs.com/what-we-do">Discover all solutions</a>
              </div>
            </div>
            <div className="rightmega" id="u1">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/banking">Banking</a>
                  <a href="https://www.tcs.com/what-we-do/industries/capital-markets">Capital Markets</a>
                  <a href="https://www.tcs.com/what-we-do/industries/consumer-goods-distribution">Consumer Goods and Distribution</a>
                  <a href="https://www.tcs.com/what-we-do/industries/communications-media-information-services">Communications, Media, and Information Services</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/education">Education</a>
                  <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities">Energy, Resources, and Utilities</a>
                  <a href="https://www.tcs.com/what-we-do/industries/healthcare">Healthcare</a>
                  <a href="https://www.tcs.com/what-we-do/industries/high-tech">High Tech</a>
                  <a href="https://www.tcs.com/what-we-do/industries/insurance">Insurance</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/industries/life-sciences"></a>
                  <a href="https://www.tcs.com/what-we-do/industries/manufacturing">Manufacturing</a>
                  <a href="https://www.tcs.com/what-we-do/industries/public-services">Public Services</a>
                  <a href="https://www.tcs.com/what-we-do/industries/retail">Retail </a>
                  <a href="https://www.tcs.com/what-we-do/industries/travel-and-logistics">Travel and Logistics</a>
                </div>
              </div>


            </div>
            <div className="rightmega" id="u2">
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cloud">Cloud</a>
                  <a href="https://www.tcs.com/what-we-do/services/cognitive-business-operations">Cognitive Business Operations</a>
                  <a href="https://www.tcs.com/what-we-do/services/consulting">Consulting</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/cybersecurity">Cybersecurity</a>

                  <a href="https://www.tcs.com/what-we-do/services/data-and-analytics">Data and Analytics</a>

                  <a href="https://www.tcs.com/what-we-do/services/enterprise-solutions">Enterprise Solutions</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a href="https://www.tcs.com/what-we-do/services/iot-digital-engineering">IoT and Digital Engineering</a>

                  <a href="https://www.tcs.com/what-we-do/services/tcs-interactive">TCS Interactive</a>

                  <a href="https://www.tcs.com/what-we-do/services/sustainability-services">Sustainability Services</a>
                </div>
              </div>

            </div>
            <div className="rightmega" id="u3">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-add">TCS ADD</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">TCS BANCS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-bfsi-platforms">TCS BFSI Platforms</a>
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-chroma">TCS CHROMA™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-customer-intelligence-insights">TCS Customer Intelligence &amp; Insights™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-erp-on-cloud">TCS ERP on Cloud</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://digitate.com/">ignio™</a>

                  <a  href="https://www.tcsion.com/dotcom/TCSSMB/">TCS iON™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-hobs">TCS HOBS™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-intelligent-urban-exchange">TCS Intelligent Urban Exchange™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore">TCS OmniStore™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-optumera">TCS Optumera™</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/products-platforms/tcs-tap">TCS TAP™</a>

                  <a  href="https://www.tcs.com/what-we-do/products-platforms/quartz">Quartz™ – The Smart Ledgers™</a>

                  <a  href="https://mastercraft.tcsapps.com/">TCS MasterCraft™</a>

                  <a  href="https://www.jile.io/">Jile™</a>

                </div>
              </div>

            </div>
            <div className="rightmega" id="u4">
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/research">TCS Research</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a  href="https://www.tcs.com/what-we-do/pace-innovation">TCS Pace™</a>
                </div>
              </div>



            </div>



          </div>


        </div>
        <li>
          <a href="https://www.tcs.com/investor-relations">Investors</a>
          <span className="nav-underline"></span>
        </li>
      </ul>
    </nav>
  )
}
