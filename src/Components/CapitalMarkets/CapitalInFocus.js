import React from 'react'
import '../Banking/belief.css';
import "./CapitalInfocus.css"
import { data } from './CapitalInFocusData'

export default function InFocus() {

  const cardData = data.map(item => {
    return (
      <a key={item.id} className="beliefCard capitalcard" href={item.cardUrl} target="_blank">
        <img src={item.imgUrl} alt='beliefCard' />
        <h1>{item.title}</h1>
        <p>{item.date}</p>
      </a>
    )
  })

  return (
    <div className='container2 capitalcontainer'>
      <div className='insightsTitle' style={{paddingTop: "50px"}}>
        <h1>In focus</h1>
      </div>

      <div className="beliefCardsContainer">
        {cardData}
      </div>
    </div>
  )
}