import React from 'react'
import './FooterBase.css'
import "../App.css"
import tcslogo from "../assets/images/tcslogo.svg"
export default function FooterBase() {
  return (
    <div className='footerbase'>
      <div className="container1">
        <div className="row align-items-center  g-4">
          <div className="col-sm-4 col-md-6 col-xl-2 ">
            <img src={tcslogo} alt="tcs image logo" />
          </div>
          <div className="col-sm-8 col-md-6 col-xl-4"> 
            <ul className="base-footer-tcs-lnks-ul">
              <li className="base-footer-tcs-lnks-ul-list">
                <a className="base-footer-tcs-lnks-ul-list-item" href="https://www.tcs.com/who-we-are/legal/tcs-privacy-notice">Privacy Notice</a>
              </li>
              <li className="base-footer-tcs-lnks-ul-list">
                <a className="base-footer-tcs-lnks-ul-list-item" href="https://www.tcs.com/who-we-are/legal/tcs-cookie-policy">Cookie Policy</a>
              </li>
              <li className="base-footer-tcs-lnks-ul-list">
                <a className="base-footer-tcs-lnks-ul-list-item" href="https://www.tcs.com/who-we-are/legal/legal-disclaimer">Disclaimer</a>
              </li>
              <li className="base-footer-tcs-lnks-ul-list">
                <a className="base-footer-tcs-lnks-ul-list-item" href="https://www.tcs.com/who-we-are/legal/security-policy">Security Policy</a>
              </li>

              <li className="base-footer-tcs-lnks-ul-list">
                <a className="base-footer-tcs-lnks-ul-list-item optanon-toggle-display ot-sdk-show-settings"  >Customize cookies</a>
              </li>

            </ul>
          </div>
           <div className="col-xl-4 socialMedia">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <span className="companyName"> ©2023 TATA Consultancy Services Limited </span>
          </div>
        </div>

      </div>

    </div>
  )
}
