import { useState } from 'react'
import './App.css'
import './index.css'
import Top from './components/top'
import Product from './components/product'
import Bottom from './components/bottom'
import Pics from './components/pics'
function App() {
  return (
    <>
    <Top/>
    <div className='h-screen' id='hom'><Pics/></div>
    <div className='h-screen p-20' id="abt">ABOUT US</div>
    <div className='h-screen p-20' id="prod">PRODUCTS </div>
    <div className='h-screen p-20' id='fac'>FACILITIES</div>
    <Bottom id="foo"/>
    </>)
}

export default App
