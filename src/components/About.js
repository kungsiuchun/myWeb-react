import React from 'react'
import Profile from './profile'

const About = () => {
    return (
      <div className="mb-5 center mx-auto" style={{maxWidth: '940px' , border: 'none' ,fontFamily: 'Montserrat, sans-serif'}}>
        <div className="row no-gutters">
            <Profile />
          <div className="col-md-8">
            <div className="card-body">
              <p className="mt-5 card-text">Hi, I'm SiuChun Kung! I'm a programmer, currently graduated from San Francisco State University.
                I'm fascinated with computers and what technology can do for people.
                I'm especially interested in web development and all the
                aspects that go into it — programming, gameplay, art, and sound design.</p>
            </div>
          </div>
        </div>
      </div>

    )
}

export default About
