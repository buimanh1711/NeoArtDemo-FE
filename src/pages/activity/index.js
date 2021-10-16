import PageHeader2 from "../../global/PageHeader2"
import ActivityWrapper from "./ActivityWrapper"

const Activity = () => {
  return (
    <div id='activity'>
      <div className='container'>
        <div className='create-container'>
          <PageHeader2 title='Activity' desc='An up to date activity feed showing proof of art! See all of the recent initial and secondary market purchases happening around NFT Marketplace.' />
          <ActivityWrapper />
        </div>
      </div>
    </div>
  )
}

export default Activity