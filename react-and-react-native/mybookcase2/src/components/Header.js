import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
    return(
        <React.Fragment>
           <div className="header">
            <h1>My Bookcase</h1>
            <Link to='/' className="bookLink">Home</Link>
            <Link to="/pages/About" className="bookLink">About</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
            <br></br>
            </div>
        </React.Fragment>
    )
}

export default Header