import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import cropMiddleString from '../../utils/cropMiddleString'
import MobileMenu from './MobileMenu'
import WalletBlock from './Wallet'

const Header = () => {
  const location = useLocation()
  const asPath = location.pathname || '/'

  const { menu, login, userInfo } = useSelector(state => state.web)
  const { userBalance, userAccounts } = userInfo

  const [mbMenu, setMbMenu] = useState(false)
  const [searchForm, setSearchForm] = useState(false)
  const [wallet, setWallet] = useState(false)

  useEffect(() => {
    setMbMenu(false)
    setWallet(false)
  }, [asPath])

  useEffect(() => {
    let body = document.querySelector('body')

    if (!wallet) {
      body.style = 'overflow: unset'
    } else {
      body.style = 'overflow: hidden'
    }

    return function cleanUp() {
      body.style = 'overflow: unset'
    }
  }, [wallet])


  const toggleMobileMenu = () => {
    setMbMenu(!mbMenu)
  }

  const toggleSearhForm = () => {
    setMbMenu(false)
    setWallet(false)
    setSearchForm(!searchForm)
  }

  return (
    <>
      <div className={searchForm && 'header search' || 'header'}>
        {
          wallet &&
          <div className='wallet-block-container'>
            <div onClick={() => setWallet(false)} className='wallet-desktop-overlay'></div>
            <WalletBlock desktop={true} active={wallet} />
          </div>
        }
        <div className='container'>
          <div className='header-container'>
            <div className='logo'>
              <a href='/'>
                <img className='web-name' src='/images/brand.png' />
              </a>
            </div>
            <div className='nav-menu'>
              {
                menu && menu.length > 0 &&
                <ul className='menu'>
                  {
                    menu.filter(x => !x.isMb).map((item, index) => (
                      <li key={index} className={item.path === asPath ? 'menu-item active' : "menu-item"}>
                        <Link className='menu-item-link' to={item.path} >
                          {item.title}
                        </Link>
                        {
                          item.children && item.children.length > 0 &&
                          <div className='child-menu'>
                            <div className='bridge'></div>
                            <ul className='children'>
                              {
                                item.children.map((child, childIdx) => (
                                  <li key={childIdx} className='child active'>
                                    <span></span>
                                    <Link to={child.path}>
                                      {child.title}
                                    </Link>
                                  </li>
                                ))
                              }
                              {
                                item.special &&
                                <li className='child networks'>
                                  <a href='' target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                  <a href='' target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                  <a href='' target='_blank'>
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                  <a href='' target='_blank'>
                                    <i className="fas fa-paper-plane"></i>
                                  </a>
                                </li>
                              }
                            </ul>
                          </div>
                        }
                        {
                          item.children && item.children.length > 0 &&
                          <>
                            <span className='down-icon'>
                              <i className='icon icon-arrow-sm-down' />
                            </span>
                            <span className='up-icon'>
                              <i className='icon icon-caret-sm-up' />
                            </span>
                          </>
                        }
                      </li>
                    ))
                  }
                </ul>
              }
            </div>
            <div className='search-form'>
              <span onClick={toggleSearhForm} className='search-icon'>
                <i style={{ color: searchForm ? 'var(--color1)' : '' }} className='icon icon-zoom' />
              </span>

            </div>
            {
              login && userAccounts?.length > 0 &&
              <div className='user-block'>
                <div className='user-info'>
                  <div className='user-info-list'>
                    <div className='bridge'></div>
                    <ul className='user-menu'>
                      <li className='user-menu-item'>
                        <Link to='/account'>
                          My Profile
                        </Link>
                      </li>
                      <li className='user-menu-item'>
                        <Link to=''>
                          My Collections
                        </Link>
                      </li>
                      <li className='user-menu-item'>
                        <Link to=''>
                          My Favorites
                        </Link>
                      </li>
                      <li className='user-menu-item'>
                        <Link to=''>
                          Account Settings
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='avt-wrapper'>
                    <Link to=''>
                      <img src='/images/default_avt.jpg' />
                    </Link>
                  </div>
                  <div className='info'>
                    <span>{userAccounts?.length > 0 ? cropMiddleString(userAccounts[0]) : 'updating...'}</span>
                    {
                      userBalance &&
                      <span>{userBalance.usd ? `${userBalance.usd} USD` : (userBalance.bnb ? `${userBalance.bnb} BNB` : 'updating...')}</span>
                    }
                  </div>
                  <span className='toggle-info'>
                    <i className='icon icon-caret-sm-up open' />
                    <i className='icon icon-arrow-sm-down close' />
                  </span>
                </div>
                <button onClick={() => { setSearchForm(false); setWallet(!wallet) }} className={wallet ? 'user-wallet active' : 'user-wallet'}>
                  <i className='icon icon-wallet-44' />
                </button>
              </div>
              ||
              <div className='btns'>
                <Link to='/nft/create' className='my-btn regular-btn create'>
                  Create NFT
                </Link>
                <button onClick={() => setWallet(true)} style={{ outline: 'none' }} className='my-btn primary-btn connect'>
                  Connect Wallet
                </button>
              </div>
            }
            <button onClick={toggleMobileMenu} className='bars-btn'>
              {
                mbMenu &&
                <i className="icon icon-e-remove" /> ||
                <i className="icon icon-contacts-45" />
              }
            </button>
          </div>
        </div>
        {
          searchForm &&
          <div className='search-form-container'>
            <div className='container'>
              <form className='search_form-form'>
                <input placeholder='Search by creator, collectible or collection' />
                <button className='search-btn'>
                  <span className="search-icon">
                    <i className='icon icon-zoom' />
                  </span>
                </button>
                <button onClick={toggleSearhForm} type="button" className='close'>
                  <i className='icon icon-e-remove' />
                </button>
              </form>
            </div>
          </div>
        }
        {
          mbMenu &&
          <MobileMenu asPath={asPath || '/'} menuList={menu} />
        }
      </div>
    </>

  )
}

export default Header
