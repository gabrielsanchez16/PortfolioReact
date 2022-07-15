import React from 'react'

import gabriel from '../../img/gabriel.jpeg'
import Particle from '../../Particle'
import Header from './Header'
import './style/home.css'

const Home = () => {

  

  return (
    <>
   
    <div className='Home'>
    <Particle/>
    <article>
        <div className='letters'>
            <span className='nf-r2'>&#60;Soy un Apasionado a la Programacion&#47;&#62;</span>
        </div>
    </article>
   </div>
   <Header/>
   </>
   
  )
}

export default Home