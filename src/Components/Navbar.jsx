import React from 'react'
import './Navbar.css'
import telegram from './Assests/telegram.png'
const Navbar = () => {
  return (
  <div className='navbar'>
    <div className='logo'>
      <h1 className='logoname'>HODLINFO</h1>
    </div>
    <div className='container'>
        <div><select name="inr" id="inr">
            <option value="inr">INR </option>
        </select></div>
        <div><select name="coins" id="coins">
            <option value="coins">BTC</option>
            <option value="coins">ETH</option>
            <option value="coins">USDT</option>
            <option value="coins">XRP</option>
            <option value="coins">TRX</option>
            <option value="coins">DASH</option>
            <option value="coins">ZEC</option>
            <option value="coins">XEM</option>
            <option value="coins">IOST</option>
            <option value="coins">WIN</option>
            <option value="coins">BTT</option>
            <option value="coins">WRX</option>
        </select></div>
        <div className='btc'>
            <p className='buy'>BUY BTC</p>
        </div>
    </div>
    <div>
        <div><img src={telegram} alt="" /></div>
    </div>

    </div>
  )
}

export default Navbar;
