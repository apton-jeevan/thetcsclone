import React from 'react'
import './belief.css';
import { data } from './beliefData'

export default function Belief() {

  const cardData = data.map(item => {
    return (
      <a key={item.id} className="beliefCard" href={item.cardUrl} target="_blank">
        <img src={item.imgUrl} alt='beliefCard' />
        <h1>{item.title}</h1>
        <p>{item.date}</p>
      </a>
    )
  })

  return (
    <div className='container2'>
      <div className='insightsTitle' style={{paddingTop: "50px"}}>
        <h1>Belief in action</h1>
      </div>

      <div className="beliefCardsContainer">
        {cardData}
      </div>
    </div>
  )
}