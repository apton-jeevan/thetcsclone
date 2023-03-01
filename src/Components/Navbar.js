import React from 'react'
import "./Navbar.css"
import { useEffect } from 'react';

import {

  Link
} from "react-router-dom";

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
  useEffect(() => {
    //for changing all rightmega to none except the first one
    let j;
    for (j = 1; j < 4; j++) {
      document.getElementById("s" + j).style = "display:none"
    }
    document.getElementById("s0").style = "display:flex"

    let leftmega = document.getElementsByClassName("changemega_1");
    let arrleft = Array.from(leftmega);
    //for changing rightmega when hovered on its respective leftmega
    arrleft.forEach((element, index) => {
      element.addEventListener("mouseover", () => {

        let right = document.getElementsByClassName("rightmega_1");
        let arrright = Array.from(right);
        arrright.forEach((e) => {
          if (e.id != "s" + index) {
            e.style = "display:none";
          }
          else {
            e.style = "display:flex";
          }
        })

      })

    })
  }, [])
  useEffect(() => {
    //for changing all rightmega to none except the first one
    let k;
    for (k = 1; k < 4; k++) {
      document.getElementById("t" + k).style = "display:none"
    }
    document.getElementById("t0").style = "display:flex"

    let leftmega = document.getElementsByClassName("changemega_2");
    let arrleft = Array.from(leftmega);
    //for changing rightmega when hovered on its respective leftmega
    arrleft.forEach((element, index) => {
      element.addEventListener("mouseover", () => {

        let right = document.getElementsByClassName("rightmega_2");
        let arrright = Array.from(right);
        arrright.forEach((e) => {
          if (e.id != "t" + index) {
            e.style = "display:none";
          }
          else {
            e.style = "display:flex";
          }
        })

      })

    })
  }, [])
  useEffect(() => {
    //for changing all rightmega to none except the first one
    let l;
    for (l = 1; l < 6; l++) {
      document.getElementById("u" + l).style = "display:none"
    }
    document.getElementById("u0").style = "display:flex"

    let leftmega = document.getElementsByClassName("changemega_3");
    let arrleft = Array.from(leftmega);
    //for changing rightmega when hovered on its respective leftmega
    arrleft.forEach((element, index) => {
      element.addEventListener("mouseover", () => {

        let right = document.getElementsByClassName("rightmega_3");
        let arrright = Array.from(right);
        arrright.forEach((e) => {
          if (e.id != "u" + index) {
            e.style = "display:none";
          }
          else {
            e.style = "display:flex";
          }
        })

      })

    })
  }, [])



  return (
    <nav className="myNavbar">
     <Link to="/" ><img className="brand-logo-img" src="https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg" alt="Tata Consultancy Services" title="Tata Consultancy Services" /></Link> 
      <ul className="myNavLinkSet">
        <div className="megamenu">
          <li className="arrowup">
            <a class="nav-link" href="https://www.tcs.com/what-we-do">What we do</a>
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent" id="mega_1">
            <div className="leftmega">
              <header className="changemega"><Link to="/overview" >Overview
              </Link><i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega"><a href="https://www.tcs.com/what-we-do.html#industries" >Industries
                 </a><i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega"><a href="https://www.tcs.com/what-we-do.html#services" >Services
                  
                  </a><i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega"><a href="https://www.tcs.com/what-we-do.html#products" >Products and Platforms
                  
                  </a><i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega"><a href="https://www.tcs.com/what-we-do/research">Research &amp; Innovation
                  
                  </a><i className="fa-solid fa-greater-than"></i></header>
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
                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-add">TCS ADD</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">TCS BANCS™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-bfsi-platforms">TCS BFSI Platforms</a>
                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-chroma">TCS CHROMA™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-customer-intelligence-insights">TCS Customer Intelligence &amp; Insights™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-erp-on-cloud">TCS ERP on Cloud</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://digitate.com/">ignio™</a>

                  <a class="l3-li-link" href="https://www.tcsion.com/dotcom/TCSSMB/">TCS iON™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-hobs">TCS HOBS™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-intelligent-urban-exchange">TCS Intelligent Urban Exchange™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore">TCS OmniStore™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-optumera">TCS Optumera™</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/tcs-tap">TCS TAP™</a>

                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/products-platforms/quartz">Quartz™ – The Smart Ledgers™</a>

                  <a class="l3-li-link" href="https://mastercraft.tcsapps.com/">TCS MasterCraft™</a>

                  <a class="l3-li-link" href="https://www.jile.io/">Jile™</a>

                </div>
              </div>

            </div>
            <div className="rightmega" id="r4">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/research">TCS Research</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/what-we-do/pace-innovation">TCS Pace™</a>
                </div>
              </div>



            </div>



          </div>

        </div><div className="megamenu">
          <li>
            <a class="nav-link" href="https://www.tcs.com/who-we-are">Who we are</a>
            <span class="nav-underline"></span>
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega changemega_1">Overview<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_1">About Us<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_1">Leadership <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_1">In the news <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="s0" className="rightmega rightmega_1">
              <h3 className="rightmega_r0_heading">We’re in it for good, driving positive change for the benefit of all.</h3>
              <p className="rightmega_r0_title">Our expert, committed team put our shared beliefs into action – every day. Together, we combine innovation and collective knowledge to create the extraordinary. </p>
              <div className="mybtn">
                <a href="https://www.tcs.com/who-we-are">Discover the difference</a>
              </div>
            </div>
            <div className="rightmega  rightmega_1" id="s1">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/tcs-sustainable-business-carbon-neutrality">Corporate Sustainability</a>

                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/diversity-equity-inclusion">Diversity, Equity, and Inclusion</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/corporate-social-responsibility">Corporate Social Responsibility </a>

                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/tcs-way">The TCS Way</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/sports-sponsorships">Sports Sponsorships</a>

                  <a class="l3-li-link" href="https://www.tcs.com/who-we-are/alliances-partnerships">Alliances</a>
                </div>
              </div>


            </div>
            <div className="rightmega  rightmega_1" id="s2">


            </div>
            <div className="rightmega  rightmega_1" id="s3">


            </div>
          </div>

        </div><div className="megamenu">
          <li className="arrowup">
            <a class="nav-link" href="https://www.tcs.com/insights">Insights</a>
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega changemega_2">Overview <i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_2">Industries<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_2">Services <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_2">Products and Platforms<i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_2">Research & Innovation <i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="t0" className="rightmega rightmega_2">
              <h3 className="rightmega_r0_heading">TCS is here to make a difference through technology.</h3>
              <p className="rightmega_r0_title">We share news, insights, analysis and research – tailored to your unique interests – to help you deepen your knowledge and impact. </p>
              <div className="mybtn">
                <a href="https://www.tcs.com/insights" class="btn-l3-description  btn-responsive mt-3 mb-2 mr-4">Discover Expert Insights</a>
              </div>
            </div>
            <div className="rightmega rightmega_2" id="t1">



            </div>
            <div className="rightmega rightmega_2" id="t2">

            </div>
            <div className="rightmega rightmega_2" id="t3">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/insights">Insights</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/metaverse-topic">Metaverse</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/sustainability-topic">Sustainability</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/cybersecurity-topic">Cybersecurity</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/ai-ml-topic">AI &amp; ML</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/blockchain-topic">Blockchain</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/cloud-topic">Cloud</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/future-of-work-topic">Future of Work</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/health-and-wellness-topic">Health &amp; Wellness</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/internet-of-things-topic">IoT</a>

                  <a class="l3-li-link" href="https://www.tcs.com/insights/topics/data-analytics-storage-topic">Data Analytics and Storage</a>


                </div>
              </div>

            </div>



          </div>

        </div>
        <div className="megamenu">
          <li className="arrowup">
            <a class="nav-link" href="https://www.tcs.com/careers">Careers</a>
            {/* <span><i className="fa-solid fa-caret-up"></i></span> */}
          </li>
          <div className="megacontent">
            <div className="leftmega">
              <header className="changemega changemega_3">Overview <i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_3">India<i className="fa-solid fa-greater-than"></i>
              </header>
              <header className="changemega changemega_3">America <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_3">Asia Specific<i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_3">Europe and UK <i className="fa-solid fa-greater-than"></i></header>
              <header className="changemega changemega_3">Middle East and Africa<i className="fa-solid fa-greater-than"></i></header>
            </div>

            <div id="u0" className="rightmega rightmega_3">
              <h3 className="rightmega_r0_heading">Want to be a global change-maker? Join our team. </h3>
              <p className="rightmega_r0_title">At TCS, we believe exceptional work begins with hiring, celebrating and nurturing the best people — from all walks of life. </p>
              <div className="mybtn">
                <a href="https://www.tcs.com/careers" class="btn-l3-description  btn-responsive mt-3 mb-2 mr-4">Join us</a>
              </div>
            </div>
            <div className="rightmega rightmega_3" id="u1">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/india">India</a>

                </div>
              </div>


            </div>
            <div className="rightmega rightmega_3" id="u2">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/argentina">Argentina</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/brazil">Brazil</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/canada">Canada</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/chile">Chile</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/colombia">Colombia</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/ecuador">Ecuador</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/mexico">Mexico</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/peru">Peru</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">

                  <a class="l3-li-link" href="https://www.tcs.com/careers/uruguay">Uruguay</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/united-states">USA</a>

                </div>
              </div>

            </div>
            <div className="rightmega rightmega_3" id="u3">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/australia">Australia</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/china">China</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/hongkong">Hong Kong</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/indonesia">Indonesia</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/japan">Japan</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/malaysia">Malaysia</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/newzealand">New Zealand</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/philippines">Philippines</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/republic-of-korea">Republic of Korea</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/singapore">Singapore</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/taiwan">Taiwan</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/thailand">Thailand</a>

                </div>
              </div>

            </div>
            <div className="rightmega rightmega_3" id="u4">
              <div className="col">
                <div className="sub">

                  <a class="l3-li-link" href="https://www.tcs.com/careers/denmark">Denmark</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/estonia">Estonia</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/finland">Finland</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/france">France</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/germany">Germany</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/hungary">Hungary</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/ireland">Ireland</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/italy">Italy</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/luxembourg">Luxembourg</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/netherlands">Netherlands</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/norway">Norway</a>
                </div>
              </div><div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/poland">Poland</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/portugal">Portugal</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/spain">Spain</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/sweden">Sweden</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/switzerland">Switzerland</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/united-kingdom">United Kingdom</a>
                </div>
              </div>


            </div>
            <div className="rightmega rightmega_3" id="u5">
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/bahrain">Bahrain</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/israel">Israel</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/kuwait">Kuwait</a>

                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/qatar">Qatar</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/saudi-arabia">Saudi Arabia</a>

                  <a class="l3-li-link" href="https://www.tcs.com/careers/south-africa">South Africa</a>
                </div>
              </div>
              <div className="col">
                <div className="sub">
                  <a class="l3-li-link" href="https://www.tcs.com/careers/united-arab-emirates">United Arab Emirates</a>
                </div>
              </div>



            </div>



          </div>


        </div>
        <li>
          <a class="nav-link" href="https://www.tcs.com/investor-relations">Investors</a>
          <span className="nav-underline"></span>
        </li>
      </ul>

    </nav>
  )
}