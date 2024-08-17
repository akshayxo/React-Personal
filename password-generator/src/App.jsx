import { useState ,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);

  const generatePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(character) str += "!@#$%^&*()_+";
    let password = "";
    for(let i = 0; i < length; i++) {
      // setpassword(password + str.charAt(Math.floor(Math.random() * str.length)));
      const charAt = Math.floor(Math.random()*str.length + 1);
      password += str.charAt(charAt);
    }
    setpassword(password);

  }
  useEffect(() => {
    generatePassword();
  }, [length, number, character]) 

  const onclickcopy = () => {
    window.navigator.clipboard.writeText(password);
  }

  return (
    
    <>
      <div className=' text-orange-400 bg-gray-500 w-full max-w-md rounded-2xl mx-auto px-4 py-4 my-8 shadow-md'>
        <div className=' flex rounded-lg shadow mb-4'>
          <input type='text' value={password} placeholder='Password' readOnly className='mx-3 w-full' >
          </input>
          <button className=' text-white bg-black rounded-md px-1'>Generate</button>
          <input type='number' value={length} onChange={(e) => setlength(e.target.value)} className='mx-3 w-16' />
        </div>
        <div className=' flex rounded-lg shadow mb-4 bg-cyan-50'>
          <input type='checkbox' onChange={()=>{setnumber((prev) =>!prev)}} className='mx-3' />
          <label>Include Numbers</label>
          <input type='checkbox' onChange={()=>{setcharacter((prev) =>!prev)}} className='mx-3' />
          <label>Include character</label>
        </div>
        <button onClick={onclickcopy} className=' text-white bg-black rounded-md px-1'>copy</button>

      </div>
    </>
  )
}

export default App
