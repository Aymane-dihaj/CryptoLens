import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import SouthIcon from '@mui/icons-material/South';
import { width } from '@mui/system'
import Tracker from './Tracker'
import { useEffect } from 'react'
import Footer from './Footer'


// Api: https://api.coincap.io/v2/assets


export const Arrow = () => {


  return (
        // <SouthIcon className='southArrow' style={{color: 'white', height: 100}} onClick={() => { window.scrollTo({top: 1300, behavior: 'smooth'}) }}/>
        <div id="mouse-scroll" onClick={() => { window.scrollTo({top: 1200, behavior: 'smooth'}) }}>
        <div class="mouse">
          <div class="mouse-in"></div>
        </div>
        <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
         </div>
      </div>
      )
}

function App() {

  const ArrowStyle = {
    border: "2px solid white",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }

  




  return (
    <>
      <div className='app'>
          <Header/>
          <Tracker/>
          <Footer/>
      </div>
    </>
  )
}

export default App
