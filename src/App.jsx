import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import Error from './components/Error.jsx';
const App = () => {
  return(
    
    <BrowserRouter>
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App