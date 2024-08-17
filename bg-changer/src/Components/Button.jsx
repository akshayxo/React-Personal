import React from 'react'

function Button({color , setcolor}) {
    const onclick = () => {
    setcolor(color);
    }
  return (
    <button onClick={onclick} className=' rounded-xl p-2 m-2' style={{color: 'white', backgroundColor: `${color}`}}>{color}</button>
  )
}

export default Button
