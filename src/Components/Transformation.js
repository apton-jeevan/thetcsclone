import React from 'react'
import './Transformation.css'
import { useEffect } from 'react';
export default function Transformation(props) {
    useEffect(() => {
        function updateClass() {
            const subtrans = document.querySelector('.subtrans');
            if (window.innerWidth > 1600) {
                subtrans.classList.add('container-fluid');
            } else {
                subtrans.classList.remove('container-fluid');
            }
        }
        // Call the function on page load
        updateClass();

        // Update the class on window resize
        window.addEventListener('resize', updateClass);


    }, []);
    return (
        <div className='transformation'>
            <div className='subtrans'>
                <div className="row justify-content-center align-items-center transRow">
                    <div className="col-md-5 side-img">
                        <img src={props.sideimgurl} alt="happy team" />
                    </div>
                    <div className="col col-md-1"></div>
                    <div className="col-12 col-xl-6">
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
