import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const Auth = ({ component: Component, ...rest }) => {
  const connected = localStorage.getItem('connected')

  return connected ?
    <Route
      render={props => <Component {...props} />}
    /> :
    <Redirect to={{ pathname: '/login' }} />
  
}

export default Auth