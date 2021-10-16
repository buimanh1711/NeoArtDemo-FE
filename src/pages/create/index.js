import PageHeader2 from '../../global/PageHeader2'
import CreateForm from './CreateForm'

const CreateNFT = () => {
  return (
    <div id='create-nft'>
      <div className='container'>
        <PageHeader2 title="Create a new collectible" />
        <div className='create-container'>
          <CreateForm />
        </div>
      </div>
    </div>
  )
}

export default CreateNFT