import React from 'react'
import "./BankingCarousel.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import { useEffect } from 'react';
import { useState } from 'react';
import "../../App.css"

export default function BankingCarousel() {
    const [isScreen, setIsScreen] = useState(4);    
    //equivalent to media queries this is qrittern for .mytcscarousel
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1400) {
                setIsScreen(4);
            }
            if (window.innerWidth < 992) {
                setIsScreen(2);
            }  
            if (window.innerWidth < 768) {
                setIsScreen(1);
            }
            else if (window.innerWidth < 1400) {
                setIsScreen(3);
            }


        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='recognition container1'>
            <h3 class="text-uppercase heading">RECOGNITION</h3>
            <OwlCarousel dots={false} margin={15} items={isScreen} nav={true}>
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/acs.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="The Last of us" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/acs1.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="GTA V" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/Quartz%20Fraud%20management.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="Mirror Edge" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/banque-saudi-fransi.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="Mirror Edge" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/property-casualty-insurance.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="Mirror Edge" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/quartz-fraud.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="Mirror Edge" />
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/claim-management.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="Mirror Edge" />
            </OwlCarousel>
        </div>
    )
}
