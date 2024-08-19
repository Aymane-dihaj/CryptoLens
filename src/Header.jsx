import React from 'react'
import bitcoinImg from './assets/bitcoin.png'
import './Header.css'
import { motion } from 'framer-motion'
import { Arrow } from './App'

function Header() {
  return (
    <div className='header'>
        <img className='btc-icon' src='/coin.svg' alt="bitcoin image" />
        <h1 className='header-h1'>cryptoLens</h1>
        <p className='header-p'>Delivers real-time updates on cryptocurrency prices, ensuring you're always informed.</p>
        <Arrow  className="arrow" />
    </div>
  )
}

export default Header
