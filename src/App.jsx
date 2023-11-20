import React from 'react'
import "./app.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Work from './Pages/Work'
import About from './Pages/About'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div>


      <Routes >

        <Route
        path='/'
        element={<Home />}
        />
        <Route
        path='/about'
        element={<About /> }
        />
        <Route 
        path='/work'
        element={<Work /> }
        />
         <Route 
        path='/contact'
        element={<Contact /> }
        />
      </Routes>
    </div>
  )
}

export default App