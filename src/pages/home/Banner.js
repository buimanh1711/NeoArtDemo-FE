import { Link } from 'react-router-dom'
const HomeBanner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner-container'>
          <div className='content'>
            <h2>
              NFT Marketplace built on Binance Smart Chain
            </h2>
            <p>
              NFT BRAND is a digital art marketplace built on Hive, a fast and free blockchain that makes creating and collecting rare digital art simple and accessible!
            </p>
            <div className='btns'>
              <Link to='/explore' className='my-btn2 regular-btn explore-btn'>
                Explore
              </Link>
              <Link to='/nft/create' className='my-btn2 primary-btn'>
                Create NFT
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeBanner