import React from "react"
import style from "./Footer.module.scss"
import fb from "./Icons/fb.svg"
import insta from "./Icons/insta.svg"
import twitter from "./Icons/Group.svg"
import linkedin from "./Icons/Linkedin.svg"
const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.icons}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className={style.icon}
        >
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className={style.icon}
        >
          <img src={insta} alt="" />
        </a>
        <a href="https://twitter.com/" target="_blank" className={style.icon}>
          <img src={twitter} alt="" />
        </a>
        <a href="https://linkedin.com/" target="_blank" className={style.icon}>
          <img src={linkedin} alt="" />
        </a>
      </div>
      <div className={style.footerText}>
        Copyright ©2020 All rights reserved{" "}
      </div>
    </div>
  )
}

export default Footer
