import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import SouthIcon from '@mui/icons-material/South';
import { width } from '@mui/system'
import Tracker from './Tracker'
import { useEffect } from 'react'


// Api: https://api.coincap.io/v2/assets

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
  

  const Arrow = () => {


    return (
      <div type='button'  className='cercle' onClick={() => { window.scrollTo({top: 1000, behavior: 'smooth'}) }} style={ArrowStyle}>
          <SouthIcon style={{color: 'white'}}/>
      </div>
    )
  }

  return (
    <>
      <div className='app'>
          <Header/>
          <Arrow  className="arrow" />
          <Tracker/>
      </div>
    </>
  )
}

export default App
