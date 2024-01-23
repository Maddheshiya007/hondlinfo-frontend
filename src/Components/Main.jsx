import './Main.css'
import Item from './Item';

const Main = ({data}) => {
  return (
    <div className='main'>
      <div className='head'>
        <p className='index'>#</p>
        <p>Plateform</p>
        <p>Last Traded Price</p>
        <p>Buy / Sell Price</p>
        <p>Difference</p>
        <p>Savings</p>
      </div>
      <div className='stockdata'>  
       {
        data?.map((item, i)=>( <div className="box">
          <Item key={i} index={i+1} item={item}/>
          </div>
        ))
       }
      </div>
    </div>
  )
}

export default Main
