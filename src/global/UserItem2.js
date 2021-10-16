import Tick from "./Tick"
import { Link } from 'react-router-dom'

const UserItem2 = ({ item }) => {
  return (
    <div className='user-wrapper2'>
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
        <span>OWNER</span>
        <Link to='/author/1' className='user-name' to=''>
          @{item.user}
        </Link>
      </div>
    </div>
  )
}

export default UserItem2