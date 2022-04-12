import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import design from "./img/design.png"
import vibrant from "./img/vibrant.png"
import malayam from "./img/malayam.png"
import components from "./img/components.png"

let postData = [
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    category: "Express, Handlebars",
    text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
]

let workData = [
  {
    id: 1,
    image: design,
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    image: vibrant,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    image: malayam,
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    image: components,
    title: "Components",
    year: "2018",
    category: "Components",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
]
let cardData = [
  {
    id: 1,
    image: design,
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    image: vibrant,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    image: malayam,
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    image: components,
    title: "Components",
    year: "2018",
    category: "Components",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
]
let recentPostData = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020 | Design, Pattern",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020 | Design, Pattern",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} workData={workData} cardData={cardData} recentPostData ={recentPostData} />
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
