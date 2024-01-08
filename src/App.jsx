import { useState } from 'react'
import './App.css'
import './index.css'
import Top from './components/top'
import Product from './components/product'
import Bottom from './components/bottom'
function App() {
  return (
    <>
    <Top/>
    <div className='h-screen p-20' id='hom'>main</div>
    <div className='h-screen p-20' id="abt">ABOUT US</div>
    <div className='h-screen p-20' id="prod">PRODUCTS</div>
    <div className='h-screen p-20' id='fac'>FACILITIES</div>
    <Bottom/>
    </>)
}

export default App
