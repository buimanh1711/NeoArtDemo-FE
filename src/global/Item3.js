import UserItem1 from "./UserItem1"

const Item3 = ({ item, index }) => {
  return (
    <div className='item3'>
      <span className='count'>
        {index + 1}.
      </span>
      <UserItem1 item={item} />
    </div>

  )
}

export default Item3