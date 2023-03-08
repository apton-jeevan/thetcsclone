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
        <div className="hover-read"><i class="fa-solid fa-book"></i><span>Read More</span></div>
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
