import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Signup } from './Singup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
