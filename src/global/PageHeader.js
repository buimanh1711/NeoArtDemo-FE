const PageHeader = ({ title, desc }) => {
  return (
    <div className='page-header'>
      <div className='container scroll2'>
        <div className='page-header-container'>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader