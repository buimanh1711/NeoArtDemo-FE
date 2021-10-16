import { useState } from "react"
import { useSelector } from "react-redux"
import TextArea from "../../global/TextArea"
import cropMiddleString from "../../utils/cropMiddleString"
import Auction from "./Auction"
import Mint from "./Mint"
import Sell from "./Sell"

const CreateForm = () => {
  const { userAccounts, userBalance } = useSelector(state => state.web.userInfo)

  const [currentOwnership, setCurrentOwnership] = useState(1)
  const [mbPreview, setMbPreview] = useState(false)
  const [successUpload, setSuccessUpload] = useState(false)

  const [file, setFile] = useState(null)
  const [data, getData] = useState({ name: '', path: null })
  const [name, setName] = useState("NFT's Name")

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = (e) => {
      const url = reader.result

      if (url) {
        setFile(url)
        getData({ name: selectedFile.name, path: url })
        setTimeout(() => {
          setSuccessUpload(true)
        }, 1000)
      }
    }

    if (selectedFile && selectedFile.type.match('image.*')) {
      reader.readAsDataURL(selectedFile)
    }
  }

  const changeName = (e) => {
    let value = e.target.value

    if (value?.length > 0) {
      setName(value)
    } else {
      setName("NFT's Name")
    }
  }

  let className = 'preview-form'
  return (
    <div className='create-form'>
      <div className='create-form-container'>
        <div className='input-form'>
          <form>
            <div className='file-upload'>
              <div className='image-container'>
                <label className='image-label' htmlFor='product_image'>
                  <img src='/images/label.png' />
                  <span>Choose File</span>
                  <p>
                    JPG, PNG, GIF (Max 50MB)<br />
                    MP4, MOV, WEBM, WMV (Max 100MB and limited to 3 minutes)
                  </p>
                  {
                    data.path && successUpload &&
                    <>
                      <p className='file_name'>Selected file: {data.name}</p>
                      <span style={{ transform: 'translateY(50%)', marginBottom: 0 }} className='success-icon'>
                        <i style={{ color: 'green', fontSize: '26px' }} className='icon icon-check' />
                      </span>
                    </>
                  }
                  <input onChange={handleChange} hidden type='file' id='product_image' />
                </label>
              </div>
            </div>
            <div className='basic-info'>
              <div className='input-container'>
                <label>
                  NFT Name
                </label>
                <input onChange={changeName} placeholder='Give your Collectible a name' />
              </div>
              <div className='input-container'>
                <label>
                  NFT Description
                </label>
                <TextArea placeholder='Describe your Collectible' id='description' />
              </div>
              <button type='button' onClick={() => setMbPreview(true)} className='my-btn regular-btn preview-btn'>Preview</button>
            </div>
            <div className='ownership-container'>
              <span className='title'>Ownership</span>
              <div className='option'>
                <input onChange={() => setCurrentOwnership(1)} checked={currentOwnership === 1} type="radio" id="1" name="ownership" value="male" />
                <label htmlFor="1">Mint to my wallet</label>
              </div>
              <div className='option'>
                <input onChange={() => setCurrentOwnership(2)} checked={currentOwnership === 2} type="radio" id="2" name="ownership" value="male" />
                <label htmlFor="2">Sell for a fixed price</label>
              </div>
              <div className='option'>
                <input onChange={() => setCurrentOwnership(3)} checked={currentOwnership === 3} type="radio" id="3" name="ownership" value="male" />
                <label htmlFor="3">Auction</label>
              </div>
              <div className='ownership-wrapper'>
                {
                  currentOwnership === 1 &&
                  <Mint />
                }
                {
                  currentOwnership === 2 &&
                  <Sell />
                }
                {
                  currentOwnership === 3 &&
                  <Auction />
                }
              </div>
            </div>

            <button className='my-btn2 primary-btn submit-btn'>
              Create NFT
            </button>

          </form>
        </div>

        <div className={mbPreview ? 'preview-wrapper mb' : 'preview-wrapper'}>
          <button onClick={() => setMbPreview(false)} className='close-preview-btn'>
            <i className='icon icon-e-remove' />
          </button>
          <div className={className}>
            <div className='thumbnail'>
              <img src={data.path || '/images/default_thumb.png'} />
            </div>
            <span className='product-name'>{name}</span>
            <div className='user'>
              <img src='/images/default_avt.jpg' />
              {
                userAccounts?.length > 0 &&
                  <span>{userAccounts[0] ? cropMiddleString(userAccounts[0]) : 'updating...'}</span>
              }
            </div>
            <div className='money'>
              {
                userBalance &&
                <span>{userBalance.usd ? `${userBalance.usd} USD` : (userBalance.bnb ? `${userBalance.bnb} BNB` : 'updating...')}</span>
              }
              <span>
                <i className='icon icon-heartbeat' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm
