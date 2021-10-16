import Tick from "./Tick"
import { Link } from 'react-router-dom'

const UserItem1 = ({ item }) => {
  return (
    <div className='user-wrapper1'>
      <Link to='/author/1'>
        <div className='avt'>
          <img className='avt-img' src={item.avt} />
          {
            item.ticked &&
            <div className='avt-tick'>
              <Tick />
            </div>
          }
        </div>
      </Link>
      <div className='info'>
        <Link to='/author/1' className='user-name'>
          @{item.user}
        </Link>
        <span>{item.money} BNB</span>
      </div>
    </div>
  )
}

export default UserItem1