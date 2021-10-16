import PageHeader from "../../global/PageHeader"
import ExploreWrapper from "./Wrapper"

const Explore = () => {
  return (
    <div id='explore'>
      <div className='explore-container'>
        <PageHeader title='Explore exclusive digital assets' desc='A market made for NFT, where everything is special' />
        <ExploreWrapper />
      </div>
    </div>
  )
}

export default Explore