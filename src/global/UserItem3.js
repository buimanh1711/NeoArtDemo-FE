import Tick from "./Tick"
import { Link } from 'react-router-dom'

const UserItem3 = (data) => {
  return (
    <div className='user-wrapper3'>
      <Link to='/author/1'>
        <div className='avt'>
          <img className='avt-img' src='/images/avt.png' />
          <div className='avt-tick'>
            <Tick />
          </div>
        </div>
      </Link>
      <div className='info'>
        <span>@ttuwii</span>
        <Link to='/profile/1' className='user-name' to=''>
          117 followers
        </Link>
      </div>
    </div>
  )
}

export default UserItem3