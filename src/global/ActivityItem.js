import { Link } from "react-router-dom"

const ActivityItem = ({ item }) => {
  return (
    <div className='activity-item'>
      <div className='item-wrapper'>
        <div className='thumb-wrapper'>
          <Link to='/activities/:id'>
            <img src={item.image} />
          </Link>
        </div>
        <div className='info-wrapper'>
          <Link className='title'>
            {item.title}
          </Link>
          <p className='description'>
            9 editions listed by @neo for 0.085 BNB each
          </p>
          <span className='time'>
            21 seconds ago
          </span>
        </div>
      </div>
    </div>
  )
}

export default ActivityItem