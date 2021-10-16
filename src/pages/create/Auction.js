import { Link } from "react-router-dom"

const Auction = () => {
  return (
    <div className='auction-form'>
      <div className='auction-container date' style={{ marginBottom: 30 }}>
        <div className='ownership-input-wrapper number-wrapper'>
          <label htmlFor='auction-start' >
            <span>
              Auction Start
            </span>
          </label>
          <input defaultValue={1} id='auction-start' type='datetime-local' />
        </div>
        <div className='ownership-input-wrapper royalties-wrapper'>
          <label htmlFor='auction-end' >
            <span>
              Auction End
            </span>
            <Link to='/help'>
              Help?
            </Link>
          </label>
          <input id='auction-end' type='datetime-local' />
        </div>
      </div>
      <div className='ownership-input-wrapper fixed-price'>
        <label htmlFor='edit-number' >
          <span>
            Fixed price
          </span>
        </label>
        <input min={1} defaultValue={1} id='fixed-number' type='number' />
        <p className='desc'>Buyers can instantly buy for the fixed asking price</p>
        <span className='pseudo'>BNB</span>
      </div>
      <div className='auction-container'>
        <div className='ownership-input-wrapper number-wrapper'>
          <label htmlFor='edit-number' >
            <span>
              Number of editions
            </span>
          </label>
          <span className='pseudo'>edition</span>
          <input min={1} defaultValue={1} id='edit-number' type='number' />
        </div>
        <div className='ownership-input-wrapper royalties-wrapper'>
          <label htmlFor='royalties' >
            <span>
              Royalties
            </span>
            <Link to='/help'>
              Help?
            </Link>
          </label>
          <span className='pseudo'>%</span>
          <input min={0.00} step={0.01} defaultValue='0.00' id='royalties' type='number' />
        </div>
      </div>
    </div>
  )
}

export default Auction