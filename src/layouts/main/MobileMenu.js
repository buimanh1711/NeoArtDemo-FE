import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import WalletBlock from "./Wallet"

const MobileMenu = ({ asPath }) => {
  const menuList = useSelector(state => state.web.menu)
  const { login } = useSelector(state => state.web)
  const [wallet, setWallet] = useState(false)

  const [menu, setMenu] = useState([...menuList])

  useEffect(() => {
    let body = document.querySelector('body')
    body.style = 'overflow: hidden'

    return function cleanUp() {
      body.style = 'overflow: unset'
    }
  }, [])

  const toggleSubMenu = (item, index) => {
    const { active } = item
    let tempState = menu.map(item => ({ ...item, active: false }))

    let newMenu = [
      ...tempState.slice(0, index),
      {
        ...item,
        active: !active,
      },
      ...tempState.slice(index + 1)
    ]

    setMenu(newMenu)
  }

  const handleClickMenu = (item, index) => {
    if (item.wallet) {
      setWallet(!wallet)
    }

    toggleSubMenu(item, index)
  }

  const connectWallet = () => {
    setWallet(true)
    let temp = menu.map(item => {
      if (item.wallet)
        return {
          ...item,
          active: true
        }

      return item
    })

    setMenu(temp)
  }

  return (
    <div id="mobile-menu">
      <div className='container'>
        {
          menu?.length > 0 &&
          <ul className={login && 'menu-list' || 'menu-list not_login'}>
            {
              wallet && !login &&
              <li className='menu-item active'>
                <span onClick={() => setWallet(false)}>
                  <i className='icon icon-arrow-sm-left' />
                </span>
                <Link className='menu-item-link'>My Wallet</Link>
              </li>
            }
            {
              menu.map((item, index) => {
                let className = 'menu-item'
                if (item.path === asPath) className += ' match'
                if (item.active) className += ' active'
                if (item.account) className += ' account'

                if (item.login) {
                  if (!login) return null
                }
                return (
                  <li key={index} className={className}>
                    {
                      item.active && (item.children?.length > 0 || item.wallet) &&
                      <span onClick={() => handleClickMenu(item, index)}>
                        <i className='icon icon-arrow-sm-left' />
                      </span>
                    }
                    <Link className='menu-item-link' to={item.path}>{item.title}</Link>
                    {
                      !item.active && (item.children?.length > 0 || item.wallet) &&
                      <span onClick={() => handleClickMenu(item, index)}>
                        <i className='icon icon-arrow-sm-right' />
                      </span>
                    }
                    {
                      item.children?.length > 0 &&
                      <ul className={item.active && 'sub_menu active' || 'sub_menu'}>
                        <div className='container'>
                          {
                            item.children.map((child, childIdx) => {
                              let subClassName = 'sub_menu-item'
                              if (child.path !== '/' && item.path + child.path === asPath) subClassName += ' match'
                              return (
                                <li key={childIdx} className={subClassName}>
                                  <Link className='sub_menu-item-link' to={child.path}>{child.title}</Link>
                                </li>
                              )
                            })
                          }
                        </div>
                      </ul>
                    }
                  </li>
                )
              })
            }
          </ul>

        }
        <div className='user-block'>
          {
            !login &&
            <>
              <Link className='my-btn regular-btn create' to='/nft/create'>
                Create NFT
              </Link>
              <button onClick={connectWallet} className='my-btn primary-btn' to='/'>
                Connect Wallet
              </button>
            </>
          }
        </div>
        <WalletBlock active={wallet} />
      </div>
    </div>
  )
}

export default MobileMenu
