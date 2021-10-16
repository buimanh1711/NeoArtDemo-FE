

const AddFundModal = ({ toggle }) => {

  return (
    <div className='add_fund-modal wallets-modal'>
      <div onClick={() => toggle(null)} className='overlay'></div>
      <div className='wrapper'>
        <div className='header'>
          <span className='header-title'>Add BNB to your wallet</span>
          <span onClick={() => toggle(null)} className='close-form-btn'>
            <i className='icon icon-e-remove' />
          </span>
        </div>
        <div className='modal-wrapper'>
          <p className='guide'>Select one of the options to deposit ETH to your wallet</p>
          <button onClick={() => toggle(2)} className='deposit-exchange'>
            <i className="icon icon-conversion"></i>
            <span>Deposit from an exchange</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddFundModal