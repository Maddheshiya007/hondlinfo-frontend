import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      
      
        <div>
            <h2>0.76 %</h2>
            <p>5 Mins</p>
        </div>
        <div>
            <h2>1.46 %</h2>
            <p>1 Hour</p>
        </div>
        <div className='tradeprice'>
        <p className='pro'> Best Price to Trade</p>
             <h1>₹ 35,79,115</h1>
            <p>Aberage BTC/INR net price including commission</p>
      </div>
      <div>
            <h2>8.35 %</h2>
            <p>1 Day</p>
        </div>
        <div>
            <h2>12.28 %</h2>
            <p>7 Days</p>
        </div>
      
    </div>
  )
}

export default Header
