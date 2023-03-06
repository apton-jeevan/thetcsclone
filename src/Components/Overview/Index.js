import React from 'react'
import Belief from './Belief'
import MyAccordianSet from './MyAccordianSet'
import Section1 from './Section1'
import Section2 from './Section2'
import Services from './Services'
import Transformation from '../Transformation'

export default function index() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Services />
      <Belief />
      <Transformation sideimgurl="https://s7ap1.scene7.com/is/image/TCSCOMprod/footer-cta-image:Extra-Medium?wid=984&hei=816&dpr=off"heading="Transformation starts here" para="Ready to move from enterprise to ecosystem?" btntxt="Talk To Our Experts"/>
      <MyAccordianSet/>
    </>
  )
}
