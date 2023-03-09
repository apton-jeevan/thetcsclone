import React from 'react'
import "./Contactusfixedbutton.css"
import { useEffect } from 'react';

export default function Contactusfixedbutton() {
    
    useEffect(() => {
    let slideButton = document.querySelector('.slide-button');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
          slideButton.classList.add('out');
          slideButton.classList.remove('in');
        } else {
          slideButton.classList.add('in');
          slideButton.classList.remove('out');
        }
      });
})



    return (
        <div>
            <div className="button-container">
            <a href="https://www.tcs.com/"> <button className="slide-button"><img src="https://www.tcs.com/content/dam/global-tcs/en/images/contact-us/contact-us.png/jcr:content/renditions/cq5dam.thumbnail.1280.765.png"></img>Contact Us</button></a>
            </div>
        </div>
    )
}
