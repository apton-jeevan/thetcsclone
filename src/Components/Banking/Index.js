import React from 'react'
import Services from '../Overview/Services'
import Transformation from './Transformation'
import BankingHero from './BankingHero'
import Belief from './Belief'
import MyAccordianSet from './MyAccordianSet'
import Review from '../Review'
import BankingCarousel from './BankingCarousel'

export default function Index() {
  return (
    <div>
     <BankingHero/>
     <Belief/>
     <MyAccordianSet/>
     <Services/>
     <Review/>
     <BankingCarousel/>
     <Transformation/>
    </div>
  )
}
