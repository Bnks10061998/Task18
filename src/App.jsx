import React from 'react'
import Carts from './components/Carts'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import ProductContextComponents from './contextpage/ProductContextComponents'

function App() {
  return <>
    <BrowserRouter>
    <Routes>
    <Route path='' element={<ProductContextComponents><Carts/></ProductContextComponents>}>
    <Route path='*' element={<Navigate to='/Carts'/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
   
    
  </>
}

export default App