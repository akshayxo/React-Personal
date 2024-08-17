import { useState } from 'react'

// import './App.css'
import Button from './Components/Button'

function App() {
  const [color, setcolor] = useState('black');
  

  return (
    <>
      <div className='flex justify-center items-center h-screen' style={{backgroundColor: `${color}`}}>
        <Button color='Red' setcolor ={setcolor} />
        <Button color='Green' setcolor={setcolor} />
        <Button color='Yellow' setcolor={setcolor} />
        <Button color='Orange' setcolor={setcolor}/>
      </div>
    </>
  )
}

export default App
