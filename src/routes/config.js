import Home from '../pages/home'
import Explore from '../pages/explore'
import Detail from '../pages/detail'
import Rank from '../pages/rank'
import CreateNFT from '../pages/create'
import Activity from '../pages/activity'
import Community from '../pages/community'
import Stats from '../pages/stats'
import Author from '../pages/author'

export default [
  {
    exact: true,
    name: 'Home',
    component: Home,
    path: '/',
    auth: false
  }, {
    name: 'Explore',
    component: Explore,
    path: '/explore',
    auth: false
  }, {
    name: 'Ranking',
    component: Rank,
    path: '/ranking',
    auth: false
  }, {
    name: 'Activity',
    component: Activity,
    path: '/activity',
    auth: false
  }, {
    name: 'Community',
    component: Community,
    path: '/community',
    auth: false
  }, {
    name: 'Stats',
    component: Stats,
    path: '/stats',
    auth: false
  }, {
    name: 'Create NFT',
    component: CreateNFT,
    path: '/nft/create',
    auth: true,
    exact: true
  }, {
    name: 'NFT',
    component: Detail,
    path: '/nft/:_id',
    auth: false,
    name: 'Create NFT',
    component: CreateNFT,
    path: '/nft/create',
    auth: false,
    exact: true
  }, {
    name: 'NFT',
    component: Detail,
    path: '/nft/:_id',
    auth: false,
  }, {
    name: 'Author',
    component: Author,
    path: '/author',
    auth: false,
  }
]