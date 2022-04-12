import React from "react"
import Hello from "./Hello/Hello"
import Recent from "./RecentPosts/Recent"
import Featured from "./FeaturedWorks/Featured"
const Home = (props) => {
  return (
    <div>
      <Hello />
      <Recent recentPostData={props.recentPostData} />
      <Featured cardData={props.cardData} />
    </div>
  )
}

export default Home
