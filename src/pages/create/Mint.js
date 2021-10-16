import { Link } from "react-router-dom"

const Mint = () => {
  return (
    <div className='mint-form'>
      <div className='mint-container'>
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

export default Mint