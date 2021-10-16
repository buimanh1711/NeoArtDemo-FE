import UserItem2 from "../../global/UserItem2"
import fakeData from '../../fakeJson.json'

const OwnerTab = ({ status, data }) => {

  return (
    <div className='owner-tab'>
      {
        fakeData?.length > 0 &&
        <ul className='user-list'>
          {
            fakeData.slice(0, 2).map((item, index) => (
              <li key={index}>
                <UserItem2 item={item} />
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default OwnerTab