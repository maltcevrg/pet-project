import React from "react"
import style from "./Featured.module.scss"
import { NavLink } from "react-router-dom"

let Featured = (props) => {
  let Card = (props) => {
    return (
      <div className={style.card}>
        <img src={props.image} alt="" classame={style.img} />
        <div className={style.cardContent}>
          <NavLink
            to="/Post"
            activeClassName="activeBtn"
            className={style.cardTitle}
          >
            {props.title}
          </NavLink>
          <span className={style.date}>
            <span className={style.year}>{props.year}</span>
            <span className={style.category}>{props.category}</span>
          </span>
          <p className={style.text}>{props.text}</p>
        </div>
      </div>
    )
  }
  let cardElement = props.cardData.map((el) => (
    <Card
      image={el.image}
      title={el.title}
      year={el.year}
      category={el.category}
      text={el.text}
    />
  ))

  return (
    <div className="container">
      <h1 className={style.title}>Work</h1>
      <div className={style.featuredWrapper}>{cardElement}</div>
    </div>
  )
}

export default Featured
