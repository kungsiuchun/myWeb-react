import React from 'react'
import IntroPict from '../intro-pic.png'

const IntroPic = () => {
    return (
        <div className="mt-5 col-md-4">
            <img src={IntroPict} className="card-img"  style={{maxHeight: '240px'}} alt="..."></img>
        </div>
    )
}

export default IntroPic
