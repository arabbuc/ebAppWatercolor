import React from 'react'

function Menu() {
    return (
        <div>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">About me</button>
    <button class="dropdown-item" type="button">Watercolors</button>
    <button class="dropdown-item" type="button">Contact</button>
  </div>
</div>
            
        </div>
    )
}

export default Menu
