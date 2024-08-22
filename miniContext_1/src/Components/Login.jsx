import React from 'react'
import { useState ,useContext } from 'react'
import UserContext from '../Contexts/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const onclick = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
      <input type="text" placeholder="username"
       value = {username}
       onChange={(e) => setUsername(e.target.value)}
       />
       {" "}
      <input type="password" placeholder='password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
       />
        <button onClick={onclick}>Login</button>
    </div>
  )
}

export default Login
