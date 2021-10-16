const Warning = ({ alert }) => {
  return (
    <div style={{width: '100%'}} className="alert alert-warning" role="alert">
      {alert || 'Error!'}
    </div>
  )
}

export default Warning