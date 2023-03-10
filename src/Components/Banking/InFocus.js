import React from 'react'
import './belief.css';
import { data } from './InFocusData'

export default function InFocus() {

  const cardData = data.map(item => {
    return (
      <a key={item.id} className="inFocusCard" href={item.cardUrl} target="_blank">
        <div className="infocusImgContainer">
          <img src={item.imgUrl} alt='beliefCard' />
        </div>
        <h1>{item.title}</h1>
        <p>{item.date}</p>
      </a>
    )
  })

  return (
    <div className='container2'>
      <div className='insightsTitle' style={{ paddingTop: "50px" }}>
        <h1>In focus</h1>
      </div>

      <div className="inFocusCardsContainer">
        {cardData}
      </div>
    </div>
  )
}

