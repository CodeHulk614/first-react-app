import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Boddy from "./Boddy"
import Footer from "./Footer"
import css from "./dist/css/bootstrap.min.css"
import header from "./style.css"



function Display(){
    return(
        <div>
            <Header />
            <Boddy />
            <Footer />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>
);

