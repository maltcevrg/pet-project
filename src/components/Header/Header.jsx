import React from "react"
import style from "./Header.module.scss"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <nav className={style.navBar}>
      <ul className={style.menuItems}>
        <NavLink
          to="/Featured"
          activeClassName={style.activeLink}
          className={style.menuItem}
        >
          Works
        </NavLink>
        <NavLink
          to="/Blog"
          activeClassName={style.activeLink}
          className={style.menuItem}
        >
          Blog
        </NavLink>
        <NavLink
          to="/Home"
          activeClassName={style.activeLink}
          className={style.menuItem}
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header
