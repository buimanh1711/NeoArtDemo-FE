import Item4 from "../../global/Item4"
import UserItem3 from "../../global/UserItem3"

const SearchResults = ({ items, users }) => {
  let fakeItems = [1, 1, 1, 1, 1, 1]
  return (
    <div className='search-result-container'>
      <div className='item-container'>
        <h4>
          Items
        </h4>
        <ul className='results'>
          {
            fakeItems.map((item, index) => (
              <li key={index}>
                <Item4 />
              </li>
            ))
          }
        </ul>
      </div>
      <div className='item-container'>
        <h4>
          Items
        </h4>
        <ul className='results'>
          {
            fakeItems.map((item, index) => (
              <li key={index}>
                <UserItem3 />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchResults