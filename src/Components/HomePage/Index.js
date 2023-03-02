import React from 'react'
import HeroSection from './HeroSection'
import Snapshot from './Snapshot'
import Insights from "./Insights"
import Discovertcsdiff from './Discovertcsdiff'
import HomePgAbout from './HomePgAbout'


export default function Index() {
  return (
    <div>
      <HeroSection/>
      <Snapshot/>
      <Insights/>
      <Discovertcsdiff/>
      <HomePgAbout/>
    </div>
  )
}
