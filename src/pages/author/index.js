import AuthorCollection from "./AuthorCollection"
import DetailInfo from "./DetailInfo"

const Author = () => {
  return (
    <div id='author'>
      <DetailInfo />
      <AuthorCollection />
    </div>
  )
}

export default Author