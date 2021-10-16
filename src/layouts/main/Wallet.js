import { useCallback, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loadWeb3Request, toggleNotifRequest } from "../../redux/web/web.actions"
import { reset, toggleNotif } from "../../redux/web/web.slice"
import copyToClipboard from "../../utils/copyToClipboard"
import cropMiddleString from "../../utils/cropMiddleString"
import AddFundModal from "./AddFund"
import ExchangeModal from "./DepositExchange"

const WalletBlock = ({ fixed, active, desktop }) => {
  const dispatch = useDispatch()
  const { web3, login, web3Modal, userInfo } = useSelector(state => state.web)
  const { userBalance, userAccounts } = userInfo

  const [copied, setCopied] = useState(false)
  const [currentModal, setCurrentModal] = useState(null)

  const connectMetaMask = () => {
    dispatch(loadWeb3Request())
  }


  const disconnectMetaMask = useCallback(async () => {
    let body = document.querySelector('body')
    body.style = 'overflow: unset'

    if (web3?.currentProvider?.close) {
      await web3.currentProvider.close()
    }
    await web3Modal.clearCachedProvider()
    dispatch(reset())
    dispatch(toggleNotifRequest({ type: 'Info', content: 'Disconnected to Metamask.' }))
  }, [web3])


  const wallets = useMemo(() => {
    return [
      {
        id: 1,
        name: 'MetaMask',
        path: '/',
        icon: '/icons/meta_mask.jpg',
        invoke: connectMetaMask
      },
      {
        id: 2,
        name: 'Bitski',
        path: '/',
        icon: '/icons/bitski.jpg'
      },
      {
        id: 3,
        name: 'Fortmatic',
        path: '/',
        icon: '/icons/fortmatic.jpg'
      },
      {
        id: 4,
        name: 'ConnectWallet',
        path: '/',
        icon: '/icons/connect_wallet.jpg'
      },
    ]
  }, [])


  const copyAnimation = useCallback(() => {
    if (copied)
      return

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [])

  const showToastMessage = (type, content) => {
    copyAnimation()
    dispatch(toggleNotifRequest({
      type,
      content
    }))
  }

  let className = 'wallet-block'
  if (active) className += ' active'
  if (desktop) className += ' desktop'
  if (fixed) className += ' fixed'

  if (wallets.length > 0)
    return (
      <div className={className}>
        {
          currentModal === 1 &&
          <AddFundModal toggle={setCurrentModal} />
        }
        {
          currentModal === 2 &&
          <ExchangeModal toggle={setCurrentModal} />
        }
        <div className='wait'>
          {
            desktop &&
            <div className={`title-container ${userAccounts?.length > 0 ? 'connected' : ''}`}>
              <span className='title'>
                My Wallet
                {
                  userAccounts?.length > 0 &&
                  <span className='drop-icon'>
                    <i className="icon icon-arrow-sm-down"></i>
                    <button onClick={disconnectMetaMask} className='disconnect'>
                      <div />
                      <i style={{ transform: 'translateY(-3px)', marginRight: '4px', marginLeft: 0 }} className="icon icon-logout"></i>
                      <span>
                        Disconnect
                      </span>
                    </button>
                  </span>
                }
              </span>
              {
                userAccounts?.length > 0 &&
                <div className='address-clipboard'>
                  <span hidden >{userAccounts?.length > 0 ? userAccounts[0] : 'updating...'}</span>
                  <span className={`address-text ${copied ? 'copied' : ''}`}>{userAccounts?.length > 0 ? cropMiddleString(userAccounts[0]) : 'updating...'}</span>
                  <span
                    onClick={() => {
                      copyToClipboard(
                        userAccounts?.length > 0 ? userAccounts[0] : null,
                        () => showToastMessage('Success', 'Your wallet address was copied to clipboard.')
                      )
                    }
                    }
                    className='copy-icon'
                  >
                    <i className={`icon icon-document-copy ${copied ? 'copied' : ''}`}></i>
                  </span>
                </div>
              }
            </div>
          }
          {
            userAccounts?.length > 0 &&
            <div className='wallet-detail-info'>
              <div className='total-balance'>
                <span className='title'>Total balance</span>
                {
                  userBalance &&
                  <span className='balance'>{userBalance.usd ? `USD ${userBalance.usd}` : (userBalance.bnb ? `BNB ${userBalance.bnb}` : 'updating...')}</span>
                }
              </div>
              <button className='add-fund' onClick={() => setCurrentModal(1)}>
                Add Fund
              </button>
              {/* <button className='disconnect-mb' onClick={disconnectMetaMask}>
                Disconnect
              </button> */}
            </div>
          }
          <div style={{ display: !login ? 'block' : 'none' }} className='wallet-list-container'>
            <p>
              Connect with one of available wallet providers or create a new wallet.
              <Link className='spc' to=''>
                {' '}What is a wallet?
              </Link>
            </p>
            <ul className='wallet-list'>
              {
                wallets.map((wallet, index) => (
                  <li onClick={wallet.invoke} key={index} className='wallet-container'>
                    <div className='wallet_avt-wrapper'>
                      <span to={wallet.path}>
                        <img src={wallet.icon} />
                      </span>
                    </div>
                    <span className='wallet-name' to={wallet.path}>
                      {wallet.name}
                    </span>
                  </li>
                ))
              }
              <div className='more_wallets'>
                <Link to=''>Show more wallets options</Link>
              </div>
            </ul>
          </div>
        </div>
      </div >
    )
  else return null
}

export default WalletBlock
