import { Link } from "react-router-dom"
import Tick from "./Tick"

const Item2 = ({ item }) => {
  return (
    <div className='item2'>
      <div className='thumb'>
        <Link to='/nft/1'>
          <img src={item.image} />
        </Link>
      </div>
      <div className='info'>
        <Link to='/nft/1' className='title'>{item.title}</Link>
        <div className='user'>
          <div className='avt'>
            <Link to='/author/1'>
              <img className='avt-image' src={item.avt} />
            </Link>
            {
              item.ticked &&
              <div className='avt-tick'>
                <Tick />
              </div>
            }
          </div>
          <Link to='/author/1'>@{item.user}</Link>
        </div>
        <div className='auct-info'>
          <span className='key'>Current bid</span>
          <span className='key'>Ending in</span>
          <span className='value'>{item.money} BNB</span>
          <span className='value'>03h 30m 21s</span>
        </div>
      </div>
    </div>
  )
}

export default Item2