const Pagination = ({ totalPage, currentPage, changePage }) => {

  const pageArr = Array.from(new Array(totalPage))

  return (
    <div className='my-pagination'>
      {
        totalPage > 1 &&
        <ul>
          {
            currentPage > 1 &&
            <li onClick={() => changePage(currentPage - 1)}>
              <i className='icon icon-arrow-sm-left' />
            </li>
          }
          {
            pageArr.map((item, index) => {
              if (index >= currentPage - 3 && index < currentPage + 2) {
                return (
                  <li key={index} onClick={() => changePage(index + 1)} className={index + 1 === currentPage && "active" || ""} >
                    <span>
                      {index + 1}
                    </span>
                  </li>
                )
              } else {
                return null
              }
            }
            )
          }
          {
            currentPage < totalPage &&
            <li onClick={() => changePage(currentPage + 1)}>
              <i className='icon icon-arrow-sm-right' />
            </li>
          }
        </ul>
      }
    </div>
  )
}

export default Pagination