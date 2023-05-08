import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Ofetas from './pages/Ofetas'
import Notfound from './pages/Notfound'



export default function App() {
  return (

    <div>
  <BrowserRouter>


   <Routes>
     
     <Route path ='/' element = {<Home/>}/>
     <Route path ='/carrinho' element = {<Carrinho/>}/>
     <Route path ='/ofertas' element = {<Ofetas/>}/>
     <Route path ='/*' element = {<Notfound/>}/>
     

   </Routes>
  
  </BrowserRouter>
  </div>
  )
}