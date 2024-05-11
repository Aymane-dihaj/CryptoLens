import React from 'react'
import "./Coin.css"
import { easeInOut, motion } from "framer-motion"

function Coin({ index, name, image, rank, price, cap}) {


    const formattedCap = parseFloat(cap).toFixed(2);
    const formattedPrice = parseFloat(price).toFixed(5);
    const color = formattedCap < 0 ? '#c71212' : 'green';

    return (
    <motion.div key={index} className='coin' style={{boxShadow: `1px 3px 36px 2px ${color}`}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        layout
        transition={{duration: 0.4}}
        whileHover={color == '#c71212' ? {boxShadow: '1px 3px 36px 2px rgba(252, 63, 63, 0.986)'} : {boxShadow: '1px 3px 36px 2px rgba(13, 236, 24, 0.986)', 
        }}
    >
        <div className="coin-container">
            <div className="coin-header">
                <p className='coin-name'>{name}</p>
                <p className='coin-rank'>#{rank}</p>
            </div>
            <div className="coin-details">
                <img className='coin-image' src={`../public/PNG/${image}.png`} alt={name} width={80}/>
                <h3 className='coin-price'>${formattedPrice.toLocaleString()}</h3>
                <div className="coin-cap" style={{backgroundColor: color}}>
                    <p className="coin-cap-perc">
                        {formattedCap}%
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Coin
