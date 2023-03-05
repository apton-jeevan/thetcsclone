import React from 'react'
import "./Review.css"

export default function Review() {
    return (
        <div>
            <div className="container p-4 review">
                <img src="https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/quote.svg" alt="Tata" />
                <h5 className="review-heading col-8">TCS stood out to us because, in our opinion, they had the best understanding of what it meant to us to be unburdened.</h5>

                <div className="author">
                <h6 class="name">ANNE-JOUKE OSINGA</h6>
                <p class="designation">Chapter Lead, Customer Journey, WestlandUtrecht Bank (subsidiary of ING Bank) </p>
                </div>
            </div>

        </div>


    )
}
