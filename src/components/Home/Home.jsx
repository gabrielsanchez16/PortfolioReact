import React from 'react'
import { useNavigate } from 'react-router-dom'
import gabriel from '../../img/gabriel.jpeg'
import './style/home.css'

const Home = () => {

  const navigate = useNavigate()

  return (
   <div className='Home'>
    <article>
    <h2 class="ml1">
        Hola Bienvenido
    </h2>
        <div>
            <h1><span>I'M</span> GABRIEL SANCHEZ</h1>
            <img src={gabriel} alt="" />
        </div>
        
    </article>
   </div>
  )
}

export default Home