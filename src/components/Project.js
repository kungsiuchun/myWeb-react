import React from 'react'
import TravelTime from '../TravelTime.png'
import GreenTicket from '../GreenTicket.png'
import Dormy from '../Dormy.jpg'
import Resume from './SiuChunKung_Resume.pdf'


const Project = () => {
    return (
        <div id="projects">
            <div className="m-3">
                <h1 className="site-heading " style={{fontSize: 65}}>Projects</h1>
                <div className="mx-auto card-inner">
                    <p>For a quick summary of my experience,<br/>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">look at my resume.</a></p>
                </div>
            <div className="row mx-auto" >
                <a className="subcard mx-auto" href="https://github.com/gasper94/Dormy" target="_blank" rel="noopener noreferrer">
                    <div className="subcard-cover"><p>Go to Page</p></div>
                    <img className="mx-auto" style={{width: '290px'}} src={Dormy} alt="..."></img>
                    <h1>Dormy - Home Rental Services<br />(JS/Node/AWS)</h1>
                </a>
                <a className="subcard mx-auto" href="https://github.com/Codepath-Termproject/GreenTicket" target="_blank" rel="noopener noreferrer">
                    <div className="subcard-cover"><p>Go to Page</p></div>
                    <img className="mx-auto" style={{width: '290px'}} src={GreenTicket} alt="..."></img>
                    <h1>GreenTicket - Tickets Exchange<br />(Swift 4)</h1>
                </a>

                <a className="subcard mx-auto" href="https://github.com/kungsiuchun/csc690-FinalProject" target="_blank" rel="noopener noreferrer">
                    <div className="subcard-cover mx-auto">
                        <p>Go to Page</p>
                    </div>
                    <img className="mx-auto" style={{width: '290px'}} src={TravelTime} alt="..."></img>
                    <h1 className="mx-auto">TravelTime! - Spots to Go<br />(Swift 4)</h1>
                </a>
            </div>
            </div>          
        </div>
    )
}

export default Project
