import React from 'react'
import TacticanPic from '../Tactician.jpg'

const Tactician = () => {
    return (
        <div className="container text-center mt-3 card">
            <div className="mx-auto">
                <img className="card__images mb-3" 
                style={{width: '400px', height: '300px'}}
                src={TacticanPic} alt="..." />
                <div className="m-3" style={{border: 'none', fontFamily: 'Montserrat, sans-serif'}}>
                    <div className="card-Title">
                        TheTactician - Sports Analyst Intern
                        <div className="mt-3 text-left ml-2">
                            <li>
                                Utilize Tableau to visualize and embed the data online.
                            </li>
                            <li>
                                Created impactful dashboards in Tableau using clustering methods for sport analysis.
                            </li>
                            <li>
                                Maintained Tableau dashboards of results for weekly briefings.                         
                            </li>
                        </div>
                        <div className="m-3 post-date">
                            Sept 2020 - March 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tactician
