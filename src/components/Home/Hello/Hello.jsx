import React from "react";
import style from "./Hello.module.scss";

const Hello = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img
          className={style.image}
          src="https://yt3.ggpht.com/ytc/AKedOLTWHQ0FRNrpzAkb2K6xdP13TdErU_ShQq0RX6260A=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div className={style.textBlock}>
          <div className={style.title}>Hi, I am John,Creative Technologist</div>
          <div className={style.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <button className={style.button}>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
