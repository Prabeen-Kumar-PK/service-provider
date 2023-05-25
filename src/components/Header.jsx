import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <>
   
    <nav>
      <h1>WorkTech</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
        
        
        
        
        
        
        
        {/* <ul>    
            <li>
                <Link to={"/"}>Home</Link>
            </li> 

            <li>
                <Link to={"/contact"}>Contact</Link>
            </li> 

            <li>
                <Link to={"/#about"}>About</Link>
            </li> 

            <li>
                <Link to={"/#brands"}>Brands</Link>
            </li>

            <li>
                <Link to={"/services"}>Products</Link>
            </li>
        </ul> */}
      </main>
    </nav>
    </>
  )
}

export default Header
