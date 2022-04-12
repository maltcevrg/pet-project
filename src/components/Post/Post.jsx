import React from "react"
import style from "./Post.module.scss"
import first from "./img/first.png"
import second from "./img/second.png"
import third from "./img/third.png"

const Post = (props) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.postTitle}>
          Designing Dashboards with usability in mind
        </h1>
        <div className={style.description}>
          <span className={style.year}>2020</span>
          <span className={style.category}>
            Dashboard, User Experience Design
          </span>
        </div>
        <div className={style.postContent}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <img src={first} alt="" className={style.postImg} />
        <h2 className={style.firstHeading}>Heading 1</h2>
        <h3 className={style.secondHeading}>Heading 2</h3>
        <div className={style.postContent}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <img src={second} alt="" className={style.postImg} />
        <img src={third} alt="" className={style.postImg} />
      </div>
    </div>
  )
}

export default Post
