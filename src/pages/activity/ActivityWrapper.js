import { useState } from "react"
import ActivityItem from "../../global/ActivityItem"
import fakeData from '../../fakeJson.json'

const ActivityWrapper = () => {

  let collections = ["Music", "Art", "Game", "Photo", "Game", "Sign"]

  const [mbFilter, setMbFilter] = useState(false)

  let className = 'filter-form'
  return (
    <div className='activity-list'>
      <button onClick={() => setMbFilter(true)} className='filter-btn'>
        <span>Collections</span>
        <i className='icon icon-arrow-sm-right' />
      </button>
      <div className='activity-list-container'>
        <div className='list-form'>
          <ul>
            {
              fakeData.map((item, index) => (
                <li key={index}>
                  <ActivityItem item={item} />
                </li>
              ))
            }
          </ul>
        </div>

        <div className={mbFilter ? 'filter-wrapper mb' : 'filter-wrapper'}>
          <button onClick={() => setMbFilter(false)} className='close-filter-btn'>
            <i className='icon icon-e-remove' />
          </button>
          <div className={className}>
            <div className='title-wrapper'>
              <span className='title'>
                Collections
              </span>
              <span className='clear'>
                Clear
              </span>
            </div>
            <div className='collections-list'>
              <ul>
                {
                  collections.map((item, index) => (
                    <li  key={index}>
                      <input id={`${index}`} type='checkbox' />
                      <label htmlFor={`${index}`}>
                        {item}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityWrapper
