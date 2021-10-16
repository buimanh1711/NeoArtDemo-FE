import { useEffect } from 'react'
import HomeBanner from './Banner'
import HomeCollection from './Collection'
import HomeExplore from './Explore'
import HomeLiveAuctions from './LiveAuctions'
import HomeTopSellers from './TopSellers'

const Home = () => {

  return (
    <div id='home'>
      <HomeBanner />
      <HomeLiveAuctions />
      <HomeTopSellers />
      <HomeExplore />
      <HomeCollection />
    </div>
  )
}

export default Home