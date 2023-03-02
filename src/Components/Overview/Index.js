import React from 'react'
import Belief from './Belief'
import MyAccordian from './MyAccordian'
import Section1 from './Section1'
import Section2 from './Section2'
import Services from './Services'
import Transformation from './Transformation'

export default function index() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Services />
      <Belief />
      <Transformation />
      <MyAccordian/>
    </>
  )
}
