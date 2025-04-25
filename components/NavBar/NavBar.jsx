import React from 'react'
import styles from "./Navbar.module.css"
const NavBar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
        <div>
            <img src='images/icon48.png'></img>
        </div>
        <div>
            <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar