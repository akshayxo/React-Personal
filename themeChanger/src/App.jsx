import { useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import ThemeContextProvider from './Contexts/ThemeContextProvider'

function App() {

  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton />
              </div>
                
              <div className="w-full max-w-sm mx-auto">
              <Card />  
              </div>
          </div>
        </div>
    </ThemeContextProvider>
      

  )
}

export default App
