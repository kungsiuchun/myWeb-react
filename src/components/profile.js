import React from 'react'
import me from '../me.png'

const profile = () => {
    return (
        <div className="col-md-4">
            <img src={me} className="card-img" style={{maxHeight: '300px', borderRadius: '50%'}} alt="..."></img>
        </div>

    )
}

export default profile
