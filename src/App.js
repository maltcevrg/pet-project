import "./App.scss"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Blog from "./components/Blog/Blog"
import { HashRouter, Routes, Route } from "react-router-dom"
import Work from "./components/Work/Work"
import Post from "./components/Post/Post"

const App = (props) => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/Blog' element={<Blog postData={props.postData} />} />
          <Route
            path='/Featured'
            element={<Work workData={props.workData} />}
          />
          <Route
            path='/'
            element={
              <Home
                cardData={props.cardData}
                recentPostData={props.recentPostData}
              />
            }
          />
          <Route
            path='/Home'
            element={
              <Home
                cardData={props.cardData}
                recentPostData={props.recentPostData}
              />
            }
          />
          <Route path='/Post' element={<Post />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
