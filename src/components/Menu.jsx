import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Watercolor from "./Watercolor"
import Contact from "./Contact"

function Menu() {
  return (
    <div>
      <div class="dropdown">
        <Router>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button"><Link to="/about">About me</Link></button>
          <button class="dropdown-item" type="button"><Link to="/watercolors">Watercolors</Link></button>
          <button class="dropdown-item" type="button"><Link to="/contact">Contact</Link></button>
        </div>
        <Route exact path="/about" component={AboutMe}></Route>
        <Route exact path="/watercolors" component={Watercolor}></Route>
        <Route exact path="/contact" component={Contact}></Route>

        </Router>
      </div>

    </div>
  )
}

export default Menu
