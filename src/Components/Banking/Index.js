import React from 'react'
import BankingServices from "./BankingServices"
import Transformation from '../Transformation'
import BankingHero from './BankingHero'
import InFocus from './InFocus'
import MyAccordianSet from './MyAccordianSet'
import Review from '../Review'
import BankingCarousel from './BankingCarousel'
import ScrollSection from './ScrollSection'
import PageDescription from '../PageDescription'

export default function Index() {
  return (
    <div>
     <BankingHero/>
     <PageDescription title="BANKING" heading="Banking on innovation" para="Banking is moving beyond banks. As banking services become embedded in other sectors, firms are pushing their traditional boundaries to build cross-industry ecosystems and create value at every stage of the customer journey. This boundaryless model, supported by the right intelligence, helps create innovative offerings and experiences. And a humane approach to banking—based on inclusivity and sustainability—drives holistic growth. "/>
     <ScrollSection/>
     <InFocus/>
     <MyAccordianSet/>
     <BankingServices/>
     <Review heading="TCS stood out to us because, in our opinion, they had the best understanding of what it meant to us to be unburdened." name="ANNE-JOUKE OSINGA" designation="Chapter Lead, Customer Journey, WestlandUtrecht Bank (subsidiary of ING Bank) "/>
     <BankingCarousel/>
     <Transformation sideimgurl="https://s7ap1.scene7.com/is/image/TCSCOMprod/banking-footer:Extra-Medium?wid=820&hei=680&dpr=off"heading="Transformation starts here" para="Ready to move from enterprise to ecosystem?" btntxt="Talk To Our Experts"/>
    </div>
  )
}
