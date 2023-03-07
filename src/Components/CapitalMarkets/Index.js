import React from 'react'
import CapitalHero from './CapitalHero'
import CaptialInFoucs from "./CapitalInFocus"
import MyAccordianSet from './MyAccordianSet'
import Review from '../Review'
import Transformation from '../Transformation'
import ScrollSection from './ScrollSection'
import PageDescription from '../PageDescription'
import CapitalServices from './CapitalServices'

export default function index() {
  return (
    <div>
      <CapitalHero />
      <PageDescription title="CAPITAL MARKETS" heading="Building equity with customers" para="Efficient and transparent capital markets are critical to economic growth and financial stability. Market volatility, high transaction volumes, demand for advisory services, and sustainability imperatives are pushing capital markets firms to focus on resilience, adaptability, and sustainable business practices. As they explore new frontiers through ecosystems and a purpose-centric approach, firms are anchoring their growth on a solid foundation of trust among all stakeholders." />
      <ScrollSection />
      <CaptialInFoucs />
      <MyAccordianSet />
      <CapitalServices />
      <Review heading="TCS, with its well-rounded capabilities in capital markets coupled with an advisory-led approach, is well equipped to support clients in making their operations more efficient." name="ROBIN JAIN" designation="Practice Director, Everest Group" />
      <Transformation sideimgurl="https://s7ap1.scene7.com/is/image/TCSCOMprod/cq5dam.thumbnail.480.480%20(1):Extra-Medium?wid=480&hei=398&dpr=off" heading="Transformation starts here" para="Ready to move from enterprise to ecosystem?" btntxt="Talk To Our Experts" />
    </div>
  )
}
