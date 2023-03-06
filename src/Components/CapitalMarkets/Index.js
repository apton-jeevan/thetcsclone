import React from 'react'
import CapitalHero from './CapitalHero'
import CaptialInFoucs from "./CapitalInFocus"
import MyAccordianSet from './MyAccordianSet'
import Services from '../Overview/Services'
import Review from '../Review'
import Transformation from '../Transformation'
import ScrollSection from '../ScrollSection'
import PageDescription from '../PageDescription'

export default function index() {
  return (
    <div>
      <CapitalHero />
      <PageDescription />
      <ScrollSection />
      <CaptialInFoucs />
      <MyAccordianSet />
      <Services />
      <Review heading="TCS, with its well-rounded capabilities in capital markets coupled with an advisory-led approach, is well equipped to support clients in making their operations more efficient." name="ROBIN JAIN" designation="Practice Director, Everest Group" />
      <Transformation sideimgurl="https://s7ap1.scene7.com/is/image/TCSCOMprod/cq5dam.thumbnail.480.480%20(1):Extra-Medium?wid=480&hei=398&dpr=off" heading="Transformation starts here" para="Ready to move from enterprise to ecosystem?" btntxt="Talk To Our Experts" />
    </div>
  )
}
