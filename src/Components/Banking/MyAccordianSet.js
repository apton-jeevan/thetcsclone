import React from 'react'
import "../Overview/MyAccordianSet.css"

export default function MyAccordianSet() {
    return (
        <div className='container bottomPad'>
                

            <div className="myAccordianDescription">
                <p className="myAccordianHeading">Products and Platforms</p>
                <p className="myAccordianTitle col-7">Accelerate banking transformation with our innovative solutions.</p>
            </div>

            <div className="myaccordian">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                <span className="accordionItemCount">01.</span>
                                <span className="accordionItemTitle ">TCS BaNCS™</span>
                            </button>
                        </h2>
                        <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  myAccBody">
                                <div className="row">
                                    <img className="col-4" src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/Banking/bancs-finance-Card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt='accordian item image' />
                                    <div className="col-8">
                                        <p>Offering Software-as-a-Service across a stack of solutions and applications, TCS BaNCS facilitates smooth transformation in financial services and drives growth. </p>
                                        <a href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">Click here<i class="fa-solid fa-circle-arrow-right"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading5">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                <span className="accordionItemCount">02.</span>
                                <span className="accordionItemTitle ">TCS Customer Intelligence & Insights™</span>
                            </button>
                        </h2>
                        <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  myAccBody"><div className="row">
                                <img className="col-4" src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/products-platforms/products/CII/customer-intelligence-insights-her-banner.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt='accordian item image' />
                                <div className="col-8">
                                    <p>TCS Customer Intelligence & Insights (CI&I) helps organizations deliver relevant, connected, and personalized user experience in real-time. Learn how. </p>
                                    <a href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">Click here<i class="fa-solid fa-circle-arrow-right"></i></a>

                                </div>
                            </div></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                <span className="accordionItemCount">03.</span>
                                <span className="accordionItemTitle ">TCS BFSI Platforms</span>

                            </button>
                        </h2>
                        <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  myAccBody">
                                <div className="row">
                                    <img className="col-4" src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/BSFI/bfsi-platforms-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt='accordian item image' />
                                    <div className="col-8">
                                        <p>TCS BFSI Platforms is a cloud-native, as-a-service digital ecosystem that helps FIs and insurance firms overcome challenges and deliver superior CX. Learn more. </p>
                                        <a href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">Click here<i class="fa-solid fa-circle-arrow-right"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading14">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
                                <span className="accordionItemCount">04.</span>
                                <span className="accordionItemTitle ">Quartz™– The Smart Ledgers™ </span>
                            </button>
                        </h2>
                        <div id="flush-collapse14" class="accordion-collapse collapse" aria-labelledby="flush-heading14" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  myAccBody"><div className="row">
                                <img className="col-4" src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/products-platforms/products/quartz/quartts-landing-page-banner.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt='accordian item image' />
                                <div className="col-8">
                                    <p>Read how TCS’ Quartz Smart Solutions help clients build their solutions on the blockchain platform and show them real, meaningful results to drive change. </p>
                                    <a href="https://www.tcs.com/what-we-do/products-platforms/tcs-bancs">Click here<i class="fa-solid fa-circle-arrow-right"></i></a>

                                </div>
                            </div></div>
                        </div>
                    </div>
                    <hr style={{visibility:"hidden"}}/>
                  
                </div>
            </div>
        </div>
    )
}
