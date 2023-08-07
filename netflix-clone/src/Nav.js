import React, { useEffect, useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const [show , handleShow] = useState(false);

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    }

  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>

            <img 
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
            alt='logo'/>


            <img 
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'/>

        </div>


       

    </div>
  )
}

export default Nav;