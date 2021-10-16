import { Link } from "react-router-dom"

const HomeCollection = () => {
  const items = [
    {
      title: 'Set up your wallet',
      content: 'Once you’ve set up your wallet of choice, connect it to NFT marketplace by clicking this link. Connect my wallet.',
      img: '/icons/collection_img.png'
    },
    {
      title: 'Create your collection',
      content: 'Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.',
      img: '/icons/collection_img.png'
    },
    {
      title: 'Add your NFTs',
      content: 'Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.',
      img: '/icons/collection_img.png'
    },
    {
      title: 'List them for sale',
      content: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.',
      img: '/icons/collection_img.png'
    },
  ]

  return (
    <div className='collection'>
      <div className='container'>
        <div className='collection-container'>
          <h2>Start your own collection today</h2>
          <div className='list'>
            <div className='row'>
              {
                items.map((item, index) => (
                  <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 my-gutter'>
                    <div className='item'>
                      <div className='img-wrapper'>
                        <Link to=''>
                          <img src={item.img} />
                        </Link>
                      </div>
                      <h3>{item.title}</h3>
                      <p>
                        {item.content}
                      </p>
                    </div>
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

export default HomeCollection