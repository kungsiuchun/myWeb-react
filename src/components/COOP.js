import React from 'react'
import Coop from '../coop.png'

const COOP = () => {
    return (
        <div className="container text-center mt-3 card">
            <div className="mx-auto">
                <img className="card__images mb-3 bg-light" 
                style={{width: '400px', height: '300px'}}
                src={Coop} alt="..." />
                <div className="m-3 mt-3" style={{border: 'none', fontFamily: 'Montserrat, sans-serif'}}>
                    <div className="card-Title">
                        Cohort 93 - Data Analytics Apprentice
                        <div className="mt-3 text-left ml-2">
                            <li>
                                Investing 200+ hours over course of program to develop in-demand industry skills: Excel (pivot tables, VLOOKUP), Digital Marketing, Google Analytics, PowerBI, Salesforce, SQL, Tableau.
                            </li>
                            <li>
                                Working daily with Mentors to gain further knowledge of the industry.
                            </li>
                            <li>
                                Attending in a teamwork based environment constantly working and communicating with peers, instructors, and alumni to build professional network and community base.
                            </li>
                        </div>
                        <div className="m-3 post-date">
                            Jan 2020 - Aug 2020
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default COOP
