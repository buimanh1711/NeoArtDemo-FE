import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false,
  wallet: false,
  web3: null,
  web3Modal: null,
  provider: null,
  userInfo: {
    userAccounts: [],
    userBalance: {},
    username: null,
    userImage: null
  },
  loading: false,
  notif: {
    type: null,
    content: ''
  },
  menu: [
    {
      id: 1,
      title: 'Explore',
      path: '/explore',
      active: false,
      children: [
        {
          id: 11,
          title: 'All NFTs',
          path: '/',
        },
        {
          id: 12,
          title: 'Game',
          path: '/',
        },
        {
          id: 13,
          title: 'Art',
          path: '/',
        },
        {
          id: 14,
          title: 'Photo',
          path: '/',
        },
        {
          id: 15,
          title: 'Music',
          path: '/',
        },
        {
          id: 16,
          title: 'Meta',
          path: '/',
        }

      ]
    },
    {
      id: 2,
      title: 'Stats',
      path: '/stats',
      active: false,
      children: [
        {
          id: 21,
          title: 'Rankings',
          path: '/ranking',
        },
        {
          id: 22,
          title: 'Statistics',
          path: '/statistics',
        },
      ]
    },
    {
      id: 2,
      title: 'Activity',
      path: '/activity',
      active: false,
    },
    {
      id: 3,
      title: 'Rankings',
      path: '/ranking',
      active: false,
    },
    {
      id: 4,
      title: 'Community',
      path: '/community',
      active: false,
      special: true,
      children: [
        {
          id: 31,
          title: 'Help center',
          path: '/help',
        },
        {
          id: 32,
          title: 'Discussion',
          path: '/',
        },
        {
          id: 33,
          title: 'Suggest feture',
          path: '/',
        },
        {
          id: 34,
          title: 'Blog',
          path: '/',
        },
        {
          id: 35,
          title: 'Subcribe to Newsletter',
          path: '/',
        }
      ],
    },
    {
      id: 5,
      title: 'My Account',
      path: '/account',
      isMb: true,
      active: false,
      account: true,
      login: true,
      children: [
        {
          id: 31,
          title: 'My Profile',
          path: '/',
        },
        {
          id: 32,
          title: 'My Collections',
          path: '/',
        },
        {
          id: 33,
          title: 'My Favorites',
          path: '/',
        },
        {
          id: 34,
          title: 'My Account Settings',
          path: '/',
        },
        {
          id: 34,
          title: 'Sign Out',
          path: '/',
        }
      ],
      special: true
    },
    {
      id: 5,
      title: 'My Wallet',
      path: '/wallet',
      isMb: true,
      active: false,
      login: true,
      wallet: true
    }
  ]
}
const web = createSlice({
  name: 'web',
  initialState: {...initialState},
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = action.payload

      return state
    },
    toggleNotif: (state, action) => {
      state.notif = action.payload
      
      return state
    },
    loadWeb3Success: (state, action) => {
      state.web3 = action.payload.web3
      state.web3Modal = action.payload.web3Modal
      state.provider = action.payload.provider
      state.login = true
      localStorage.setItem('connected', 'connected')

      return state
    },
    getUserAccounts: (state, action) => {
      state.userInfo.userAccounts = action.payload

      return state
    },
    getUserBalance: (state, action) => {
      state.userInfo.userBalance = action.payload

      return state
    },
    triggerWallet: (state, action) => {
      state.wallet = action.payload
    },
    reset: (state => {
      localStorage.removeItem('connected')

      return { ...initialState }
    })
  }
})

const { actions, reducer } = web
export const {
  toggleLoading,
  toggleNotif,
  loadWeb3Success,
  getUserAccounts,
  getUserBalance,
  triggerWallet,
  reset
} = actions
export default reducer