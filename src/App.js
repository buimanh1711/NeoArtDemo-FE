
import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import routes from './routes/config'

import './static/styles/common.css'
import './static/styles/global.scss'
import './static/styles/main_layout.scss'

import './static/styles/home.scss'
import './static/styles/explore.scss'
import './static/styles/detail.scss'
import './static/styles/rank.scss'
import './static/styles/create.scss'
import './static/styles/activity.scss'
import './static/styles/author.scss'

import './static/icons/scss/icons.scss'
import './static/styles/responsive.scss'

import MainLayout from './layouts/main'
import Auth from './layouts/auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBalanceRequest, loadWeb3Request, toggleNotifRequest } from "./redux/web/web.actions"
import scrollTop from './utils/scrollTop'
import { getUserAccounts } from './redux/web/web.slice'
import ToastNotif from './global/ToastNotif'

function App() {
  const location = useLocation()
  const asPath = location.pathname || '/'

  const dispatch = useDispatch()
  const { web3, notif } = useSelector(state => state.web)

  //get info
  useEffect(async () => {
    if (web3) {
      let tempAccounts = await web3.eth.getAccounts()

      if (tempAccounts?.length > 0) {
        dispatch(getUserAccounts(tempAccounts))
        try {
          let balance = await web3.eth.getBalance(tempAccounts[0])
          balance = web3.utils.fromWei(balance, 'ether')

          if (balance) {
            dispatch(getUserBalanceRequest({ amount: balance }))
          }
        } catch {
          dispatch(toggleNotifRequest({ type: 'Error', content: 'Can not get balance!' }))
        }
      }
    }
  }, [web3])

  //auto login
  useEffect(async () => {
    if (localStorage.getItem('connected'))
      dispatch(loadWeb3Request())
  }, [])

  useEffect(() => {
    scrollTop()
  }, [asPath])

  return (
    <div className='my-app'>
      {
        ((notif?.type) && (notif?.content !== '')) &&
        <ToastNotif />
      }
      <MainLayout>
        <Switch>
          {
            routes?.length > 0 &&
            routes.map(item =>
              item.auth ?
                <Auth {...item} /> :
                <Route key={item.name} {...item} />
            )
          }
        </Switch>
      </MainLayout>
    </div>
  )
}

export default App
