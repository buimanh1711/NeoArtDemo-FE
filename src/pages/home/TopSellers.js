import Item3 from "../../global/Item3"
import arr from '../../fakeJson.json'

const HomeTopSellers = () => {
  return (
    <div className='top-sellers'>
      <div className='container'>
        <div className='top-sellers-container'>
          <div className='top-sellers-header'>
            <h2>Top Sellers</h2>
            <button>
              <span style={{transform: 'translateY(-2px)', display: 'inline-block'}}>
                View all creators
              </span>
              <i style={{transform: 'translateY(-2px)', display: 'inline-block'}} className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className='list'>
            <div className='row'>
              {
                arr.slice(0, 8).map((item, index) => (
                  <div key={index} className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-gutter'>
                    <Item3 item={item} index={index} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTopSellers