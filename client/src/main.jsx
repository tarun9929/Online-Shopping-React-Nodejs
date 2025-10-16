import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Error404 from './Components/Error404.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='login'  element={<Login />}/>
        <Route path='register'  element={<Register />}/>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
