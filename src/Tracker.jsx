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
import { AlternateEmail } from '@mui/icons-material';




function Tracker() {
    
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([])
    const [page, setPage] = useState(2)
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [amount, setAmount] = useState(() => {
        return localStorage.getItem('number-of-coins') || 30;
    });
    
    useEffect(() => {
        localStorage.setItem('number-of-coins', amount);
    }, [amount])

    const handleSearch = (e) => {
        setSearch(e.target.value);
        e.preventDefault()
        // console.log(e.target.value)
    }
    
    const apiKey = import.meta.env.VITE_API_KEY;

    const options = {
        headers: {
          'accept': 'application/json',
          'X-API-KEY': apiKey,
        }
      }

    const refresh = () => {
        setLoading(true);
        axios.get(`https://openapiv1.coinstats.app/coins?limit=${amount}`, options)
        .then(
            res => {
                setCoins(res.data.result)
                setLoading(false);
            }
        ).catch(error => alert(error));
    }

    useEffect(() => {
        setLoading(true);
        const storedAmount = localStorage.getItem('number-of-coins')
        axios.get(`https://openapiv1.coinstats.app/coins?limit=${storedAmount}`, options)
        .then(
            res => {
                
                setCoins(res.data.result)
                setLoading(false);
            }
        ).catch(error => alert(error));
    }, [])


    useEffect(() => {
        Aos.init()
    }, [])


    const loadMore = () => {
        let newAmount = amount;
        let newPage = page;
        newAmount += 3;
        newPage += 1;
        if (newAmount >= 1000){
            return alert('You Reached The maximum')
        }
        //!NEED TO CHECK FOR THE MAXIMUM COINS NUMBER (1000)
        setPage(newPage);
        setAmount(newAmount)
        setLoadingBtn(true);
        axios.get(`https://openapiv1.coinstats.app/coins?page=${page}&limit=${amount}`, options)
        .then(
            res => {
                // coins.push(res.data.result);
                setCoins(prevCoins => [...prevCoins, ...res.data.result]);
                console.log(response);
                setLoadingBtn(false);
            }
        ).catch(error => alert(error));
    }


    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='tracker' id='tracker'>
       <h1 data-aos="fade-down">Coins</h1>
       <form>
            <input type='text' onChange={handleSearch} placeholder="Search For Coins" className='tracker-search'/>
       </form>
            <button className='refresh' onClick={refresh}>Refresh</button>
       <div className="coins-container">
            <div className='coins'>
                {loading ?  <div className='loading-wrapper'><img src={loadingIcon} alt="Loading" width={100} /></div> : 
                filteredCoins.map((coin) => {
                    return (
                        <AnimatePresence key={coin.name}>
                            <Coin key={coin.id}  className='coin' link={coin.websiteUrl} index={coin.id} name={coin.name}  image={coin.icon} rank={coin.rank} price={coin.price}  cap={coin.priceChange1d} 
                             />
                        </AnimatePresence>
                    )
                })}
            </div>
            {loadingBtn ? <div ><img src={loadingIcon} alt="Loading" width={100} /></div> : <div className='refresh' onClick={loadMore}>load more</div>}
       </div>
    </div>
  )
}

export default Tracker
