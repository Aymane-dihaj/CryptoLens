import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import './Tracker.css'
import FlipMove from 'react-flip-move';
import { AnimatePresence, motion } from "framer-motion"
import Spinner from 'react-bootstrap/Spinner';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { duration } from '@mui/material';
import loadingIcon from './assets/infinite-spinner.svg';



function Tracker() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        e.preventDefault()
        // console.log(e.target.value)
    }

    const options = {
        headers: {
          'accept': 'application/json',
          'X-API-KEY': '/17QuER7ivXY/zLcddnb3TN7oHhyCAubCgsDKiqT3T0='
        }
      };

    const refresh = () => {
        setLoading(true);
        axios.get('https://openapiv1.coinstats.app/coins?limit=60', options)
        .then(
            res => {
                console.log(res.data.result);
                setCoins(res.data.result);
                setLoading(false);
            }
        ).catch(error => alert(error));

    }

    useEffect(refresh, [])
    useEffect(() => {
        Aos.init()
    }, [])



    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className='tracker' id='tracker'>
       <h1 data-aos="fade-down">Coins</h1>
       <form>
            <input type='text' onChange={handleSearch} placeholder="Search For Coins" className='tracker-search'/>
       </form>
            <button className='refresh' onClick={refresh}>Refresh</button>
       <div className="coins-container">
                {loading ?  <img src={loadingIcon} alt="Loading" width={100}/> : filteredCoins.map(coin => {
                    return (
                        <AnimatePresence>
                            <Coin key={coin.id}  link={coin.websiteUrl} index={coin.id} name={coin.name}  image={coin.icon} rank={coin.rank} price={coin.price}  cap={coin.priceChange1d} 
                             />
                        </AnimatePresence>
                    )
                })}
       </div>
    </div>
  )
}

export default Tracker
