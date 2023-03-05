import React from 'react'
import Services from '../Overview/Services'
import Transformation from './Transformation'
import BankingHero from './BankingHero'
import Belief from './Belief'
import MyAccordianSet from './MyAccordianSet'
import Review from '../Review'

export default function Index() {
  return (
    <div>
     <BankingHero/>
     <Belief/>
     <MyAccordianSet/>
     <Services/>
     <Review/>
     <Transformation/>
    </div>
  )
}
