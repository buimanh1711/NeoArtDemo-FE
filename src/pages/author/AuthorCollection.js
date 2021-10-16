
import { useState } from "react"
import Item2 from "../../global/Item2"
import arr from '../../fakeJson.json'

const AuthorCollection = () => {

  const categories = [
    {
      _id: 0,
      name: 'On Sale',
    },
    {
      _id: 1,
      name: 'Owned'
    },
    {
      _id: 2,
      name: 'Created'
    },
    {
      _id: 3,
      name: 'Liked'
    },
    {
      _id: 4,
      name: 'Activity'
    },
    {
      _id: 5,
      name: 'Following'
    },
    {
      _id: 6,
      name: 'Followers'
    }
  ]

  const [currentCategory, setCurrentCategory] = useState({ _id: null, index: 0 })

  const changeCategory = (_id, index) => {
    setCurrentCategory({ _id, index })
  }

  return (
    <div className='collection'>
      <div className='categories-wrapper'>
        <div className='container scroll2'>
          {
            categories?.length > 0 &&
            <ul className='scroll2'>
              {
                categories.map((item, index) => (
                  <li key={index} onClick={() => changeCategory(item._id, index)} className={currentCategory.index === index ? 'active' : ''} key={item._id}>
                    {item.name}
                    <span>1k2</span>
                  </li>
                ))
              }
            </ul>
          }
        </div>
      </div>
      <div className='collection-list'>
        <div className='container'>
          <div className='row my-gutter'>
            {
              arr?.length > 0 &&
              arr.slice(0, 8).map((item, index) => (
                <div key={index} className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 my-gutter collection-item'>
                  <Item2 item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCollection