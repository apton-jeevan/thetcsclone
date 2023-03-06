import React from 'react'
import "./Review.css"

export default function Review(props) {
    return (
        <div>
            <div className="container p-4 review">
                <img src="https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/quote.svg" alt="Tata" />
                <h5 className="review-heading col-sm-12 col-lg-8">{props.heading}</h5>

                <div className="author">
                <h6 class="name">{props.name}</h6>
                <p class="designation">{props.designation}</p>
                </div>
            </div>

        </div>


    )
}


