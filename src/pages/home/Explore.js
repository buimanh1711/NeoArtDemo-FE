import Item1 from "../../global/Item1"
import { Link } from "react-router-dom"
import arr from '../../fakeJson.json'

const HomeExplore = () => {

  const categories = [
    {
      title: 'All',
      icons: '/icons/cate_all.png',
      path: '/'
    },
    {
      title: 'Games',
      icons: '/icons/cate_game.png',
      path: '/'
    },
    {
      title: 'Art',
      icons: '/icons/cate_art.png',
      path: '/'
    },
    {
      title: 'Photo',
      icons: '/icons/cate_photo.png',
      path: '/'
    },
    {
      title: 'Music',
      icons: '/icons/cate_music.png',
      path: '/'
    },
    {
      title: 'Meta',
      icons: '/icons/cate_meta.png',
      path: '/'
    }
  ]
  return (
    <div className='explore'>
      <div className='container'>
        <div className='explore-container'>
          <div className='explore-header'>
            <h2>Explore</h2>
            <div className='categories'>
              <ul>
                {
                  categories.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>
                        <img src={item.icons} />
                        <span>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <Link to='explore' className='view'>
              <span>
                View all NFTs
              </span>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
          <div className='list'>
            <div className='row'>
              {
                arr.slice(0, 8).map((item, index) => (
                  <div key={index} className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-gutter'>
                    <Item1 item={item} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className='direct'>
            <Link to='/explore' className='my-btn regular-btn'>
              View All NFTs
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeExplore