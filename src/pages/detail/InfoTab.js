const InfoTab = ({ status, data }) => {

  return (
    <div className='info-tab'>
      <span className='key'>
        NFT ID
      </span>
      <span className='value'>
        71767
      </span>
      <span className='key'>
        MINT TRANSACTION
      </span>
      <p className='value'>
        0x0b66c1a213ff8c9d67ac671b44e6484b30b7e746bcb0063b43c77a03a4b96f3f
      </p>
      <span className='key'>
        CONTRACT ADDRESS
      </span>
      <p className='value'>
        0xF5db804101d8600c26598A1Ba465166c33CdAA4b
      </p>
    </div>
  )
}

export default InfoTab