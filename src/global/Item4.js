import { Link } from "react-router-dom"

const Item4 = ({ item }) => {
  return (
    <div className='item4'>
      <div className='image-wrapper'>
        <Link to=''>
          <img src='/images/demo.png' alt />
        </Link>
      </div>
      <div className='info'>
        <Link to='' className='title'>Ethereum Security</Link>
        <span>0.9 NBN</span>
      </div>
    </div>
  )
}

export default Item4