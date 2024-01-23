import React from 'react'
import './Item.css'
const Item = ({index, item}) => {
  return (
    <div className='head item'>
        <p>{index}</p>
        <p>{item.name}</p>
        <p>₹ {item.last}</p>
        <p>₹ {item.buy} / ₹ {item.sell}</p>
        <p>5 %</p>
        <p>₹ 6,35,500</p>
      </div>
  )
}
export default Item;