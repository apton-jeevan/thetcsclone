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
                <button className="slide-button"><i class="fa-solid fa-message"></i>Contact Us</button>
            </div>
        </div>
    )
}
