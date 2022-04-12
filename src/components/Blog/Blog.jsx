import React from "react"
import style from "./Blog.module.scss"

const Blog = (props) => {
  const PostCard = (props) => {
    return (
      <div className={style.post}>
        <a href="">
          <p className={style.title}>{props.title}</p>
        </a>
        <p className={style.date}>
          <span>{props.date}</span>
          <span>|</span>
          <span>{props.category}</span>
        </p>
        <p className={style.text}>{props.text}</p>
      </div>
    )
  }
  let post = props.postData.map((el) => (
    <PostCard
      title={el.title}
      date={el.date}
      category={el.category}
      text={el.text}
    />
  ))

  return (
    <div className={style.container}>
      <h1>Blog</h1>
      {post}
    </div>
  )
}

export default Blog
