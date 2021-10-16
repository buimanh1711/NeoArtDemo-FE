const PageHeader2 = ({ title, desc }) => {
  return (
    <div className='page-header2'>
      <div className='container'>
        <div className='page-header-container'>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader2