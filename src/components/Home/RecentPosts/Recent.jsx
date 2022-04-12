import React from "react"
import style from "./Recent.module.scss"

const Recent = (props) => {
  let PostCard = (props) => {
    return (
      <div className={style.post}>
        <a href="">
          <p className={style.title}>{props.title}</p>
        </a>
        <p className={style.date}>{props.date}</p>
        <p className={style.text}>{props.text}</p>
      </div>
    )
  }


  let post = props.recentPostData.map((el) => (
    <PostCard title={el.title} date={el.date} text={el.text} />
  ))

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <p className={style.recent}>
          <span>Recent posts</span>
          <a className={style.viewAll} href=" ">
            View all
          </a>
        </p>
        <div className={style.postWrapper}>{post}</div>
      </div>
    </div>
  )
}

export default Recent
