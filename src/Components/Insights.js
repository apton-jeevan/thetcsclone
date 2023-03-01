import React from 'react'
import "../App.css";
import { data } from './data'

export default function Insights() {
  // Mapping over Data content
  const cardData = data.map(item => {
    return (
      <a key={item.id} className='insightCard' href={item.cardUrl}>
        <img src={item.imgUrl} alt='Insight' />
        <div className="topBtn">{item.topItem}</div>
        <h1>{item.title}</h1>
        <div className="hover-read">Read More</div>
      </a>
    )
  })

  return (
    <section>
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
