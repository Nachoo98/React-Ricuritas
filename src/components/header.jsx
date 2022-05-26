import React from 'react'
import Img from './assets/logo.png'


function header(){

return(<div>
  <nav className="nav_carrito">
    <ul className="nav">
        <a href="../../home" className="cajaLogo">
          <img className="logo" src={Img} alt=""></img>
        </a> 
    </ul>
  </nav>

  </div>)
  }

  
export default header;