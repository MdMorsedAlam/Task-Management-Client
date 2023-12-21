import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';

const PrivateRoute = ({children}) => {
 const {user,loading}=useAuth()
 const location=useLocation()
 if(loading){
     return <h1 className="text-6xl text-red-500 font-bold text-center">Loading</h1>
 }
 if(user){
     return children
 }
 return  <Navigate state={location.pathname} to='/login'></Navigate>;
};
PrivateRoute.propTypes={
 children:PropTypes.node,}
export default PrivateRoute;