import React from 'react'
import "./BankingHero.css"


export default function BankingHero() {
    return (
        <div className='bankingHero'>
            <div className="container">
                <div className="bankingHeroContent">
                    <p className='head text-uppercase'>Industries/Banking</p>
                    <div className="bankingHeroText col-md-12 col-lg-12 col-xl-5">
                        <h1>Banks go boundaryless</h1>
                        <p className='para'>We help you drive holistic growth with a secure, boundaryless, and humane approach.</p>
                        <a className="letstalk" href="https://www.tcs.com/contact-us/industry-overlay/talk-to-an-expert-banking" >Let's talk <i class="fa-solid fa-circle-arrow-right letstalkIcon"></i></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
