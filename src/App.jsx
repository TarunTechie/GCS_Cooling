import { useState } from 'react'
import './App.css'
import './index.css'
import Top from './components/top'
import Products from './components/products'
import Bottom from './components/bottom'
import Pics from './components/pics'
import Facility from './components/facility'
function App() {
  return (
    <>
    <Top/>
    <div className='h-screen' id='hom'><Pics/></div>
    <div className='p-20' id="abt">ABOUT US</div>
    <div className='md:h-screen grid pt-20 place-content-center sm:h-auto pt-0' id="prod"><Products/></div>
    <div className='md:h-screen grid pt-20 place-content-center sm:h-auto pt-0' id='fac'><Facility/></div>
    <div className='p-20 bg-blue-500' id='foo'><Bottom/></div>
    </>)
}

export default App
