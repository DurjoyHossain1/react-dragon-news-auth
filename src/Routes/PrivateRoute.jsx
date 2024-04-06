import React, { useContext } from 'react'
import  { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
   
    console.log(location.pathname);

    if (loader) {
        return <div className='flex items-center justify-center w-full'><span className="loading loading-spinner loading-lg mt-40"></span></div>
    }

    if (user) {
        return children
    }
  return (
    <Navigate state={location.pathname} to="/login" />
  )
}

export default PrivateRoute