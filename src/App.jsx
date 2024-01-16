import './App.css'
import './index.css'
import Top from './components/top'
import Products from './components/products'
import Bottom from './components/bottom'
import Pics from './components/pics'
import Facility from './components/facility'
import About from './components/about'
import Project from './components/project'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
    <Top/>
    <Link to='/productpage'><div className='md:h-screen sm:h-full' id='hom'><Pics/></div></Link>
    <div className='md:h-screen sm:h-auto' id="abt"><About/></div>
    <div className='md:h-screen grid pt-20 place-content-center sm:h-auto pt-52' id="prod"><Link to='/productpage'><Products/></Link></div>
    <div className='md:h-screen grid pt-20 place-content-center sm:h-auto pt-52' id='fac'><Facility/></div>
    <div className='md:h-screen grid pt-44 pb-10 place-content-center sm:h-auto pt-0' id='pro'><Project/></div>
    <div className='md:p-20 mt-4 bg-blue-500 sm:p-0' id='foo'><Bottom/></div>
    </>)
}

export default App
