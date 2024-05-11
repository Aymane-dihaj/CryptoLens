import React from 'react'
import bitcoinImg from './assets/bitcoin.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img className='btc-icon' src={bitcoinImg} alt="bitcoin image" width={500}/>
      <h1 className='header-h1'>CryptoDex</h1>
      <p className='header-p'>Get the latest updates of Bitcoin, Solana, Etheruim, etc...</p>
    </div>
  )
}

export default Header
