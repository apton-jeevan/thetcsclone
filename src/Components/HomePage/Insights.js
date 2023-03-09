import React from 'react'
import "../../App.css"
import { data } from './Insightdata'
import "./Insights.css"

export default function Insights() {
  // Mapping over Data content
  const cardData = data.map(item => {
    return (
      <a key={item.id} className='insightCard' href={item.cardUrl}>
        <img src={item.imgUrl} alt='Insight' />
        <div className="topBtn">{item.topItem}</div>
        <h1><b>{item.title}</b></h1>
        <div className="hover-read">
          <a href="https://www.tcs.com/what-we-do/industries/energy-resources-utilities/case-study/final-customer-check-framework-tse-improve-outcome"> <p><span className="bookonimg"></span ><b>Read More</b></p> </a>
        </div>
      </a>
    )
  })

  return (
    <section className='myInsight'>
      <div className='container1'>
        <div className='insightsTitle'>
          <h1>Insights by interest</h1>
          <a href='https://www.tcs.com/insights'>View all</a>
        </div>
        <hr />
        <div className="insightCardsContainer">
          {cardData}
        </div>
      </div>
    </section>

  );

}
