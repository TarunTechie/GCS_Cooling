import { useState } from 'react'
import './App.css'
import './index.css'
import Top from './components/top'
import Products from './components/products'
import Bottom from './components/bottom'
import Pics from './components/pics'
function App() {
  return (
    <>
    <Top/>
    <div className='h-screen' id='hom'><Pics/></div>
    <div className='p-20 h-screen' id="abt">ABOUT US</div>
    <div className='p-20' id="prod"><Products/></div>
    <div className='p-20' id='fac'><Products/></div>
    <div className='p-20 bg-blue-500' id='foo'><Bottom/></div>
    </>)
}

export default App
