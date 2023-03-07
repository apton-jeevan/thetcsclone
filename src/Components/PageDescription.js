import React from 'react'
import "./PageDescription.css"

export default function PageDescription(props) {
    return (
        <div>
            <div className="container pageDescription">
                <h5 className="title">{props.title}</h5>
                <h5 className="heading">{props.heading}</h5>
                <p className="para">{props.para}</p>
                <hr></hr>
            </div>
        </div>
    )
}
