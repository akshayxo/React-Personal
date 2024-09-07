import { useState , useEffect } from 'react'
import { useDispatch  } from 'react-redux'
import {login ,logout} from './store/authSlice'
import authservice from './appwrite/auth/auth';
import './App.css'
import {Header , Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    authservice.getCurrentUser()
      .then(user =>{
        if(user){
          dispatch(login(user));
        }
        else{
          dispatch(logout());
        }
      })
      .finally(()=>{
        setLoading(false);
      })
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
