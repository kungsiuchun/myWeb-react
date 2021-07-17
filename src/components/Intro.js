import React from 'react'
import IntroPic from './IntroPic'

const Intro = () => {
    return (
        <div>
            <div className="mb-4 border-0 center mx-auto" style={{maxWidth: '940px', fontFamily: 'Montserrat, sans-serif' }}>
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="mt-5 card-text">
                            Currently, I work remotely as an intern sports analyst. Getting insights out of data is something
                            that I really like. Data visualization and machine learning are some techniques that I am
                            using to achieve this. The toolsets I prefer to use in analysing data are R and python.
                            <br />
                            <br />
                            In college, I worked on projects where I built an apartment rental website as a team, to solve the
                            need of SFSU students in the SF Bay Area, and developed a reusable, cross-browser base 
                            template for the front-end team in order to empower collaborations on user, admin, and 
                            property pages. Through these projects and many others, I have become skilled at using HTML, JavaScript,
                            and SQL for data processing and web development.
                            <br />
                            <br />
                            I love to work with other engaged individuals towards a common goal and learning new skills. 
                            </p>
                        </div>
                    </div>
                    <IntroPic />
                </div>
            </div>    
        </div>
    )
}

export default Intro
