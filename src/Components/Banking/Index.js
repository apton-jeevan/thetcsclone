import React from 'react'
import Services from '../Overview/Services'
import Transformation from '../Transformation'
import BankingHero from './BankingHero'
import InFocus from './InFocus'
import MyAccordianSet from './MyAccordianSet'
import Review from '../Review'
import BankingCarousel from './BankingCarousel'

export default function Index() {
  return (
    <div>
     <BankingHero/>
     <InFocus/>
     <MyAccordianSet/>
     <Services/>
     <Review heading="TCS stood out to us because, in our opinion, they had the best understanding of what it meant to us to be unburdened." name="ANNE-JOUKE OSINGA" designation="Chapter Lead, Customer Journey, WestlandUtrecht Bank (subsidiary of ING Bank) "/>
     <BankingCarousel/>
     <Transformation sideimgurl="https://s7ap1.scene7.com/is/image/TCSCOMprod/banking-footer:Extra-Medium?wid=820&hei=680&dpr=off"heading="Transformation starts here" para="Ready to move from enterprise to ecosystem?" btntxt="Talk To Our Experts"/>
    </div>
  )
}
