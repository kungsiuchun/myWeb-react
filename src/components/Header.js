import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    function onClick(e) {
        window.location.replace("/#projects")
    }
    return (
        <div className="container-fluid navbar-container m-sm-5">
        <nav class="navbar navbar-toggleable-sm title navbar-light px-1 py-1 my-3 mb-sm-3">
            <a class="navbar-brand ml-2" href="/">SiuChun Kung</a>
            
        <div className="collapse navbar-collapse text-center">
            <ul className="navbar-nav ml-auto my-auto">

                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                    <AnchorLink className="nav-link" href="#projects">Project</AnchorLink>
                </li>

                <li className="nav-item">
                    <AnchorLink className="nav-link" href="#experiences">Experience</AnchorLink>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">LeetCodes</a>
                </li>
            </ul>       
        </div>
        </nav>
        </div>
  
    )
}

export default Header
