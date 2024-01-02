import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{display : "flex" , alignItems : "center" ,   justifyContent : 'center' , rowGap : "2rem"} }> 
            <Link class="navbar-brand" to="/">Mern </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">HomeForm</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/allusers">AllUsers</Link>
                </li>
             
            </ul>
            </div>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
