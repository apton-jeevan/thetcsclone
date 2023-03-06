import React from 'react'
import { useEffect } from 'react';
import "./ScrollSection.css"
import "../App.css"
export default function ScrollSection() {
    useEffect(() => {
        const topicsContainer = document.querySelector(".topics-container");
        const topicLinks = topicsContainer.querySelectorAll("a");

        document.querySelector(".paragraph-container").addEventListener("scroll", function () {
            const para_items = this.querySelectorAll(".para_items");
            para_items.forEach(function (item) {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    const id = item.getAttribute("id");
                    topicLinks.forEach(function (link) {
                        const isActive = link.getAttribute("href") === `#${id}`;
                        if (isActive) {
                            const li = link.closest(".topics");
                            li.classList.add("highlight_li");
                            const correspondingSpan = link.querySelector('span');
                            correspondingSpan.classList.add('highlight_span');
                            link.classList.add("highlight_a")
                        }
                        else {
                            const li = link.closest(".topics");
                            li.classList.remove("highlight_li");
                            const correspondingSpan = link.querySelector('span');
                            correspondingSpan.classList.remove('highlight_span');
                            link.classList.remove("highlight_a")

                        }
                    });
                }
            });
        });
    }, [])


    return (
        <div className='scrollsection-outercontainer'>
            <h2 className="scrollsectionHeading">
                Partner with us for intelligent banking solutions.
            </h2>
            <div className="scrollsection-innercontainer">
                <div className="topics-container">
                    <h3 className="topics-container-heading text-uppercase">
                        your challenge
                    </h3>
                    <ul>
                        <li className="topics"><a href="#topic1"><span className="d-block mb-2 tab-list-no">01</span><p className="topicname">Reimagining the banking experience</p></a></li>
                        <li className="topics"><a href="#topic2"><span className="d-block mb-2 tab-list-no">02</span><p className="topicname">Preempting and mitigating risk</p></a></li>
                        <li className="topics"><a href="#topic3"><span className="d-block mb-2 tab-list-no">03</span><p className="topicname">Battling financial crime in a digital-first world</p></a></li>
                    </ul>
                </div>
                <div className="paragraph-container">
                    <div className="para_items" id="topic1">
                        <h2 className='intro-heading text-uppercase mb-3'>our solutions</h2>
                        <h3 className="intro-description ">TCS Wealth Advisory Solution  </h3>
                        <p className="intro-para">Analytics-based recommendation engine that helps financial advisors make informed investments.</p>
                        <a class="learnmore" href="https://www.tcs.com/what-we-do/industries/banking/solution/customer-experience-management-suite-for-bfsi-industry">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                        
                        <h3 className="intro-description para_itemHide"></h3>
                        <p className="intro-para para_itemHide"></p>
                        <a class="learnmore para_itemHide" href="https://www.tcs.com/what-we-do">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                      
                        
                    </div>
                    <div className="para_items" id="topic2">
                    <h2 className='intro-heading text-uppercase mb-3'>our solutions</h2>
                        <h3 className="intro-description ">Cognitive assurance for risk and compliance </h3>
                        <p className="intro-para">A suite of solutions to drive intelligent interventions in risk information and control assurance</p>
                        <a class="learnmore" href="https://www.tcs.com/what-we-do/industries/banking/solution/bfsi-cro-cognitive-assurance-for-risk-and-compliance">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                       
                        <h3 className="intro-description ">Early warning framework for risk management </h3>
                        <p className="intro-para ">A machine learning-based framework to track, assess, and manage counterparties’ risks in real time</p>
                        <a class="learnmore " href="https://www.tcs.com/what-we-do/industries/banking/solution/early-warning-framework-for-proactive-risk-management">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                       
                    </div>
                    <div className="para_items" id="topic3">
                    <h2 className='intro-heading text-uppercase mb-3'>our solutions</h2>
                        <h3 className="intro-description ">Financial crime compliance offerings</h3>
                        <p className="intro-para">A range of solutions and services to strengthen defenses against financial crime</p>
                        <a class="learnmore" href="https://www.tcs.com/what-we-do/industries/banking/solution/financial-crime-compliance-offerings">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                       
                        <h3 className="intro-description">Cyber vigilance platform </h3>
                        <p className="intro-para">Analytics-backed managed detection and response services to proactively tackle cyber threats</p>
                        <a class="learnmore" href="https://www.tcs.com/what-we-do/services/cybersecurity/solution/cyber-vigilance-vulnerability-incident-response">Learn More<i class="fa-solid fa-circle-arrow-right"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>  
    )
}
