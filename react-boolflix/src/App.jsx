import GlobalContext from "./src/context/GlobalContext"
import axios from "axios"
import HomePage from "./src/pages/HomePage"
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import './App.css'

function App() {
  

  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}

export default App
