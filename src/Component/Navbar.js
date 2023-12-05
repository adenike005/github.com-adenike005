import "./Navbar.css"
import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="header">
        <Link to="/">
            <h1>Grant</h1>
        </Link>
        <ul className="nav-menu">
         <li>
         <Link to="/"> Home</Link>
         </li>
         <li >
         <Link to="/sign" > SignUp</Link>
         </li>
        <li>
        <Link to="/login"> SignIn</Link>
        </li>
        </ul>

    </div>
  )
}

export default Navbar