import {Route, Routes, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error' 
import Skills from './components/Skills/Skills'
import logo from './img/LOGOWHITE.jpg'

function Portfolio() {
const navigate = useNavigate()

  return (
  
    <div className='container-all'>
    <nav className='nav-bar'>
      <img className='logo' src={logo} onClick={()=>navigate('/')} alt="" />
        <ul className='menu-items'>
            <li><button onClick={()=>navigate('./about')}>About me</button> </li>
            <li><button onClick={()=>navigate('./skills')}>Skills</button> </li>
            <li><button onClick={()=>navigate('./projects')}>Projects</button> </li>
            <li><button onClick={()=>navigate('./contact')}>Contact</button> </li>
        </ul>
        <span className='btn-menu'>
          <i class="fa-solid fa-bars-staggered"></i>
        </span>
    </nav>
  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
      </div>

  )
}

export default Portfolio
