import React from 'react'
import "./Coin.css"
import { easeInOut, motion } from "framer-motion"



function Coin({ index, name, image, rank, price, cap, link}) {


    const formattedCap = parseFloat(cap).toFixed(2);
    const formattedPrice = parseFloat(price).toFixed(5);
    const color = formattedCap < 0 ? '#c71212' : 'green';

    return (
        <div
        key={index}
        data-aos="zoom-out-up"
        className="coin"
        style={{
          boxShadow: `1px 3px 36px 2px ${color}`,// Adding transition for smooth effect
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = `1px 3px 36px 13px ${color}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = `1px 3px 36px 2px ${color}`;
        }}
      >
        <a href={link} target='_blank' className="coin-container" >
            <div className="coin-header">
                <p className='coin-name'>{name}</p>
                <p className='coin-rank'>#{rank}</p>
            </div>
            <div className="coin-details">
                <img loading='lazy' className='coin-image' src={image} alt={name} width={80}/>
                <h3 className='coin-price'>${formattedPrice.toLocaleString()}</h3>
                <div className="coin-cap" style={{backgroundColor: color}}>
                    <p className="coin-cap-perc">
                        {formattedCap}%
                    </p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Coin
