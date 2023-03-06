import React from 'react'
import "./CapitalHero.css"
import "../Banking/BankingHero.css"

export default function CapitalHero() {
  return (
   
      <div className='capitalHero'>
            <div className="container">
                <div className="bankingHeroContent">
                    <p className='head'>Industries/Capital Markets</p>
                    <div className="bankingHeroText col-md-12 col-lg-12 col-xl-5">
                        <h1>Limitless growth is built on trust</h1>
                        <p className='para'>We help you drive long-term, sustainable and exponential growth.</p>
                        <a className="letstalk" href="https://www.tcs.com/contact-us/industry-overlay/talk-to-an-expert-banking" >Let's talk <i class="fa-solid fa-circle-arrow-right letstalkIcon"></i></a>
                    </div>
                </div>
            </div>

        </div>
  )
}
