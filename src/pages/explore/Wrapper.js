import { useEffect, useState } from "react"
import Pagination from "../../global/Pagination"
import ExploreList from "./List"

const ExploreWrapper = () => {
  const [mbFilter, setMbFilter] = useState(false)

  const [status, setStatus] = useState(true)
  const [price, setPrice] = useState(false)
  const [collection, setCollection] = useState(false)

  const statusFilters = [
    {
      name: 'New',
      value: 'new',
    },
    {
      name: 'Buy Now',
      value: 'now',
    },
    {
      name: 'Live Auction',
      value: 'live',
    },
    {
      name: 'Has Offers',
      value: 'offers',
    }
  ]

  const priceFilters = [
    {
      type: 'VND',
      value: 'vnd',
    },
    {
      type: 'USD',
      value: 'usd',
    },
    {
      type: 'EURO',
      value: 'euro',
    }
  ]

  const collectionFilters = [
    {
      name: 'Rarible',
      value: 'abc',
      quantity: 123
    },
    {
      name: 'CryptoPunks',
      value: 'abc',
      quantity: 123
    },
    {
      name: 'Red Run',
      value: 'abc',
      quantity: 123
    },
    {
      name: 'VieFriend',
      value: 'abc',
      quantity: 123
    }
  ]

  let className = 'filter_side-container scroll2'

  return (
    <div className='explore-wrapper'>
      <div className='container'>
        <div className='explore-wrapper-container'>
          <div className={mbFilter ? 'filter_side mb-active' : 'filter_side'}>
            <button onClick={() => setMbFilter(false)} className='close-filter' style={{ display: 'none' }}>
              <i className='icon icon-e-remove' />
            </button>
            <div className={className}>
              <div className='filter-box status'>
                <div className='box-title'>
                  <span className='active'>Status</span>
                  <span onClick={() => setStatus(!status)}>
                    {
                      status &&
                      <i className='icon icon-caret-sm-up' />
                      ||
                      <i className='icon icon-arrow-sm-down' />
                    }
                  </span>
                </div>
                <div className={status ? 'box-data active' : 'box-data'}>
                  <ul>
                    {
                      statusFilters?.length > 0 &&
                      statusFilters.map(item => (
                        <li key={item.value}>
                          {item.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className='filter-box price'>
                <div className='box-title'>
                  <span>Price</span>
                  <span onClick={() => setPrice(!price)}>
                    {
                      price &&
                      <i className='icon icon-caret-sm-up' />
                      ||
                      <i className='icon icon-arrow-sm-down' />
                    }
                  </span>
                </div>
                <div className={price ? 'box-data active' : 'box-data'}>
                  <select defaultValue='usd'>
                    {
                      priceFilters?.length > 0 &&
                      priceFilters.map(item => (
                        <option selected={item.value === 'usd'} key={item.value} value={item.value}>
                          {item.type}
                        </option>
                      ))
                    }
                  </select>
                  <div className='price-sort'>
                    <input placeholder='Min' min={0} style={{ marginRight: '10px' }} type='number' />
                    <input placeholder='Max' min={0} type='number' />
                  </div>
                  <button className='my-btn regular-btn'>
                    Apply
                  </button>
                </div>
              </div>
              <div className='filter-box collection'>
                <div className='box-title'>
                  <span>Collection</span>
                  <span onClick={() => setCollection(!collection)}>
                    {
                      collection &&
                      <i className='icon icon-caret-sm-up' />
                      ||
                      <i className='icon icon-arrow-sm-down' />
                    }
                  </span>
                </div>
                <div className={collection ? 'box-data active' : 'box-data'}>
                  <div className='checkbox'>
                    {
                      collectionFilters?.length > 0 &&
                      collectionFilters.map(item => (
                        <div className='option' key={item.value} value={item.value}>
                          <input type='checkbox' value={item.value} id={item.value} />
                          <label htmlFor={item.value}>
                            {item.name}
                          </label>
                          <span>({item.quantity})</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main_side'>
            <div className='main-sort'>
              <span className='result'>
                21,307,896 results
              </span>
              <button onClick={() => setMbFilter(true)} className='filter-btn-mb'>
                <i className="fas fa-sliders-h"></i>
                <span>Filters(12)</span>
              </button>
              <select className='category' defaultValue='all'>
                <option value='all'>All NFTs</option>
                <option value='n'>Games</option>
                <option value='n'>Art</option>
                <option value='n'>Photo</option>
                <option value='n'>Music</option>
                <option value='n'>Meta</option>
              </select>
              <select className='time-sort' defaultValue='all'>
                <option selected hidden value='all'>Recently added</option>
                <option value='n'>Oldest</option>
                <option value='n'>Latest</option>
              </select>
            </div>
            <div className='main-items'>
              <div className='list-container'>
                <ExploreList />
              </div>
              <div className='main-pagination'>
                <Pagination totalPage={10} currentPage={2} changePage={() => { }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreWrapper
