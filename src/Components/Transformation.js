import React from 'react'
import './Transformation.css'
export default function Transformation(props) {
    return (
        <div className='transformation'>
            <div className='container-fluid'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 side-img">
                        <img src={props.sideimgurl} alt="happy team" />
                    </div>
                    <div className="col col-md-1"></div>
                    <div className="col-sm-12 col-md-6">
                        <div class="footerCTA-right-content-inner-section" data-dl-title="Transformation starts here">
                            <h2 class="footerCTA-right-content-heading-h2 mb-4 transformation-heading">{props.heading}</h2>
                            <p class="footerCTA-right-content-para-p mb-4 transformation-para"><b>{props.para}</b></p>
                            <a href="https://www.tcs.com/contact-us/what-we-do" class="transformation-btn">{props.btntxt}</a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
