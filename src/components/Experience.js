import React from 'react'
import Tactician from './Tactician'
import Coop from './COOP'
import Pensa from './Pensa'

const Experience = () => {
    return (
        <div id="experiences" className="m-5 " style={{border:'none'}}>
            <h1 className="site-heading m-5" style={{fontSize: 65}} >Experience</h1>
            <div className="zone grid-wrapper m-4">
                <div className="bg-light mx-auto mb-5" style={{width: '100%'}} >
                    <Pensa />
                    <br />
                    <Tactician />
                    <br/>
                    <Coop />
                </div>

            </div>
            
        </div>
    )
}

export default Experience
