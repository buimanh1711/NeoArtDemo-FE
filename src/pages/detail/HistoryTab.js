import { Link } from "react-router-dom"
import Tick from "../../global/Tick"

const HistoryTab = ({ status, data }) => {
  const fakeData = [1, 2]

  return (
    <div className='history-tab'>
      {
        fakeData?.length > 0 &&
        <ul className='user-list'>
          {
            fakeData.map((item, index) => (
              <li key={index}>
                <Link to='/profile/1'>
                  <div className='avt-wrapper'>
                    <img className='avt-img' src='/images/demo.png' />
                    <div className='avt-tick'>
                      <Tick />
                    </div>
                  </div>
                </Link>
                <span>Put on sale for <strong>90 BNB</strong> 5 hours ago by <strong>@johndoe</strong></span>
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default HistoryTab