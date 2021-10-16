import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNotifRequest } from "../../redux/web/web.actions"
import copyToClipboard from "../../utils/copyToClipboard"

const ExchangeModal = ({ toggle }) => {
  const { userAccounts } = useSelector(state => state.web.userInfo)
  const [copied, setCopied] = useState(false)

  const dispatch = useDispatch()

  const copyAnimation = () => {
    if (copied)
      return

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className='deposit_exchange-modal wallets-modal'>
      <div className='overlay'></div>
      <div className='wrapper'>
        <div className='header'>
          <span onClick={() => toggle(1)} className='back-form-btn'>
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className='header-title'>Deposit ETH from your exchange</span>
          <span onClick={() => toggle(null)} className='close-form-btn'>
            <i className='icon icon-e-remove' />
          </span>
        </div>
        <div className='modal-wrapper'>
          <p className='guide'>Deposit ETH from your <span style={{ color: '#017a9b' }}>exchange</span> info to the following address:</p>
          <div className='address-wrapper'>
            <span className='address-string-container'>
              <p className={`${copied ? 'copied' : ''}`}>
                {(userAccounts?.length > 0) ? userAccounts[0] : 'updating...'}
              </p>
            </span>
            <span
              onClick={
                () => copyToClipboard(
                  userAccounts?.length > 0 ? userAccounts[0] : null,
                  () => {
                    copyAnimation();
                    dispatch(toggleNotifRequest({ type: 'Success', content: 'Your wallet address was copied to clipboard.' }))
                  }
                )} className='copy-btn' > <i style={{ transform: 'translateY(2px)' }} className={`icon icon-document-copy ${copied ? 'copied' : ''}`}></i></span>
          </div>
          <p className='guide bottom'>Only send BNB or any other BEP-20 token to this address.</p>
          <button onClick={() => toggle(null)} className='my-btn2 primary-btn made-btn'>I've made my deposit</button>
        </div>
      </div>
    </div>
  )
}

export default ExchangeModal