import React from 'react'
import PensaPic from '../pensa.png'

const Pensa = () => {
    return (
        <div className="container text-center mt-3 card">
            <div className="mx-auto">
                <img className="card__images mb-3 bg-light" 
                style={{width: '400px', height: '300px'}}
                src={PensaPic} alt="...">
                </img>
                <div className="m-3 mt-3" style={{border: 'none', fontFamily: 'Montserrat, sans-serif'}}>
                    <div className="card-Title">
                        Pensa Systems - San Francisco Field Coordinator
                        <div className="mt-3 text-left ml-2">
                        <li>
                            Working in coordination with field data scanner to facilitate clients project.
                        </li>
                        <li>
                            Coordinates with the recruiter and HR Coordinator when onboarding new candidates.
                        </li>
                        <li>
                            Ensured all time sheets were received and converted correctly.
                        </li>
                        </div>
                        <div className="m-3 post-date">
                            April 2021 - Current
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pensa
