import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AboutMe from "./AboutMe"
import Watercolor from "./Watercolor"
import Contact from "./Contact"

function Menu() {
  return (
    <Router>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"> <Link to="/about">About me</Link> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link"> <Link to="/watercolors">Watercolors</Link> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link"> <Link to="/contact">Contact</Link> <span class="sr-only">(current)</span></a>
            </li>
            </ul>

  </div>
</nav>

         <div class="dropdown">
          
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">

            </div>
            
            <Route exact path="/about" component={AboutMe}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/watercolors" component={Watercolor}></Route>

         
        </div> 

  </Router>



  
  )
}

export default Menu
