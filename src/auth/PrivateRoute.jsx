import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from "../firebase";
import loader from '../assets/loader.gif';

const PrivateRoute = ({children}) => {

  const [user, loading, error] = useAuthState(auth);  
    
  if (loading) {
    return (
      <div className='bg-[#000]/[.6] absolute bottom-0 left-0 top-0 right-0 flex justify-center items-center'>
          <img src={loader} alt="loader"/>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  console.log(user)

  return user ? children : <Navigate to="/" />

}

export default PrivateRoute;