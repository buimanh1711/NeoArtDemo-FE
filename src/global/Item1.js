import { Link } from "react-router-dom"
import Tick from './Tick'

const Item1 = ({ item }) => {
  return (
    <div className='item1'>
      <div className='thumb'>
        <Link to='/nft/1'>
          <img src={item.image} />
        </Link>
      </div>
      <div className='info'>
        <Link to='/nft/1' className='title'>{item.title}</Link>
        <div className='user'>
          <div className='avt'>
            {
              item.ticked &&
              <div className='avt-tick'>
                <Tick />
              </div>
            }
            <Link to='/author/1'>
              <img className='avt-img' src={item.image} />
            </Link>
          </div>
          <Link to='/author/1'>@{item.user}</Link>
        </div>
        <div className='value-info'>
          <span style={{ transform: 'translateY(2px)' }}>{item.money} BNB</span>
          <span className='icon'>
            <span>
              ({item.likes})
            </span>
            <i style={{ color: '#4a5568', transform: 'translateY(2px)' }} className='icon icon-heartbeat' />
            {/* active: */}
            {/* <i className='icon icon-heart' /> */}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Item1