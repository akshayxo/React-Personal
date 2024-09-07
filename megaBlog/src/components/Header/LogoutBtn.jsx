import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth/auth'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authservice.logout()
            .then(()=>{
                dispatch(logout());
            })
    }
  return (
    <button 
    className=' inline-block py-6 px-2 duration-200 
     bg-blue-100 rounded-full' onClick={logoutHandler}>
        Logout
     </button>
  )
}

export default LogoutBtn

