import { useState } from "react"
import List1 from "../../global/List1"
import HistoryTab from "./HistoryTab"
import InfoTab from "./InfoTab"
import OwnerTab from "./OwnerTab"

const Detail = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  const [tab, setTab] = useState(1)

  return (
    <div id='detail'>
      <div className='container'>
        <div className='detail-container'>
          <div className='main_info'>
            <div className='main_info-image'>
              <div className='image-wrapper'>
                <img src='/images/demo.png' alt='detail image' />
              </div>
            </div>
            <div className='main_info-info'>
              <h1>#mb1o4er</h1>
              <span className='price'>117 BNB</span>
              <p className='description'>
                Truse had settled down in his advancing years, tending his flocks on the mountainside.
                One day Truse was out with the flock when something above caught his eye.
                A large Wrathcrown Eagle.
              </p>
              <span className='pieces'>10 pieces created</span>
              <button className='my-btn3 primary-btn buy'>
                Buy
              </button>
              <div className='networks'>
                <div className='social_networks'>
                  <a href='' target='_blank'>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href='' target='_blank'>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href='' target='_blank'>
                    <i className="fas fa-paper-plane"></i>
                  </a>
                  <a href='' target='_blank'>
                    <i style={{ color: '#5640b7' }} className="fas fa-link"></i>
                  </a>
                </div>
                <div className='like'>
                  <span>117</span>
                  <button>
                    <i style={{ color: '#e60023' }} className='icon icon-heart' />
                    {/* <i style={{color: #4a5568}} className='icon icon-heartbeat' /> */}
                  </button>
                </div>
              </div>
              <div className='tabs'>
                <button onClick={() => setTab(1)} className={tab === 1 ? 'tab-btn active' : 'tab-btn'}>OWNER</button>
                <button onClick={() => setTab(2)} className={tab === 2 ? 'tab-btn active' : 'tab-btn'}>HISTORY</button>
                <button onClick={() => setTab(3)} className={tab === 3 ? 'tab-btn active' : 'tab-btn'}>INFO</button>

              </div>
              <div className='tab-container'>
                {
                  tab === 1 &&
                  <OwnerTab data={{}} />
                }
                {
                  tab === 2 &&
                  <HistoryTab />
                }
                {
                  tab === 3 &&
                  <InfoTab />
                }
              </div>
            </div>
          </div>
          <List1 data={arr} title='More from this collection' />
        </div>
      </div>
    </div>
  )
}

export default Detail