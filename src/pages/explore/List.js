import Item1 from "../../global/Item1"
import arr from '../../fakeJson.json'

const ExploreList = () => {
  return (
    <div className='list'>
      <div className='row'>
        {
          arr?.length > 0 &&
          arr.map((item,index) => (
            <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-gutter'>
              <Item1 item={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ExploreList