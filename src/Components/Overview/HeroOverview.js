import React from 'react'
import "../Banking/BankingHero.css"
import "./HeroOverview.css"

export default function HeroOverview() {
  return (
    <div>
      <div className='overviewHero'>
            <div className="container">
                <div className="bankingHeroContent">
                    <p className='head text-uppercase'>What We Do</p>
                    <div className="bankingHeroText col-md-12 col-lg-12 col-xl-7">
                        <h1>Transforming businesses through technology.</h1>
                        <p className='para'></p>
                        <a className="letstalk" href="https://www.tcs.com/contact-us/industry-overlay/talk-to-an-expert-banking" >Let's talk <i class="fa-solid fa-circle-arrow-right letstalkIcon"></i></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}