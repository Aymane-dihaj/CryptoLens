import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import './Tracker.css'
import FlipMove from 'react-flip-move';
import { AnimatePresence, motion } from "framer-motion"


function Tracker() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        e.preventDefault()
        // console.log(e.target.value)
    }

    const refresh = () => {
        axios.get('https://api.coincap.io/v2/assets').then(
            res => {
                setCoins(res.data.data);
                console.log(res.data.data);
            }
        ).catch(error => alert(error));

    }

    useEffect(refresh, [])



    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

        const hoverEffect = () => {
            
        }

  return (
    <div className='tracker' id='tracker'>
       <h1>Coins</h1>
       <form>
            <input type='text' onChange={handleSearch} placeholder="Search For Coins" className='tracker-search'/>
       </form>
            <button className='refresh' onClick={refresh}>Refresh</button>
       <div className="coins-container">
                {filteredCoins.map(coin => {
                    const imagePath = `./assets/PNG/${coin.symbol}.png`
                    return (
                        <AnimatePresence>
                            <Coin key={coin.id} index={coin.id} name={coin.name}  image={coin.symbol.toLowerCase()} rank={coin.rank} price={coin.priceUsd}  cap={coin.changePercent24Hr} 
                             />
                        </AnimatePresence>
                    )
                })}
       </div>
    </div>
  )
}

export default Tracker
