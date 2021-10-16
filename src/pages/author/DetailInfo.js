import { Link } from "react-router-dom"

const DetailInfo = () => {
  return (
    <div className='detail-info'>
      <div className='info-banner'>

      </div>
      <div className='container'>
        <div className='info-information'>
          <div className='info-avt'>
            <div className='avt-wrapper'>
              <img src='/images/account_avt.png' />
            </div>
          </div>

          <div className='info-username'>
            <span>WorldWithNFT</span>
          </div>

          <div className='info-bio'>
            <p>A sissy girl living far away from the old world🌹 The new world with NFT will be different than now!</p>
            <p>
              My paintings, digital arts, physical items and nice photos. Everything is here but you...</p>
          </div>

          <div className='info-networks'>
            <div className='fb'>
              <i className='icon icon-logo-fb-simple' />
              <Link>WorldWithNFT</Link>
            </div>
            <div className='twitter'>
              <i className='icon icon-logo-twitter' />
              <Link>WorldWithNFT</Link>
            </div>
            <div className='w3'>
              <i className='icon icon-globe' />
              <Link>WorldWithNFT</Link>
            </div>
          </div>

          <div className='actions'>
            <button className='actions-btn follow'>Follow</button>
            <button className='actions-btn2 share'>
              <i className='icon icon-social-sharing' />
            </button>
            <button className='actions-btn2'>
              <i className='icon icon-o-warning-1' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInfo