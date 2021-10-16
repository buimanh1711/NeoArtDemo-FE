import { useState } from "react"
import PageHeader from "../../global/PageHeader"
import RankTable from "./Table"

const Rank = () => {
  const categories = [
    {
      _id: 0,
      name: 'All'
    },
    {
      _id: 1,
      name: 'Game'
    },
    {
      _id: 2,
      name: 'Art'
    },
    {
      _id: 3,
      name: 'Music'
    },
    {
      _id: 4,
      name: 'Photo'
    },
    {
      _id: 5,
      name: 'Virtual Worlds'
    },
    {
      _id: 6,
      name: 'Trading Card'
    },
    {
      id: 7,
      name: 'Collectibles'
    }
  ]

  const [currentCategory, setCurrentCategory] = useState({ _id: null, index: 0 })

  const changeCategory = (_id, index) => {
    setCurrentCategory({ _id, index })
  }

  return (
    <div id='rank'>
      <div className='rank-container'>
        <div className='rank-categories'>
          <PageHeader
            title='Top Non-Fungible Tokens'
            desc='Top selling nifties (by secondary market sales) - stats updated in real-time. Additional sorting and filtering coming soon!'
          />
          <div className='categories-wrapper'>
            <div className='container scroll2'>
              {
                categories?.length > 0 &&
                <ul className='scroll2'>
                  {
                    categories.map((item, index) => (
                      <li key={index} onClick={() => changeCategory(item._id, index)} className={currentCategory.index === index ? 'active' : ''} key={item._id}>
                        {item.name}
                      </li>
                    ))
                  }
                </ul>
              }
            </div>
          </div>
          <div className='rank-table'>
            <div className='container scroll2'>
              <RankTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rank