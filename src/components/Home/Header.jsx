import React from 'react'
import './style/header.css'
import gabriel from '../../img/gabriel.jpeg'
const Header = () => {
  return (
    <div className='header'>
        <section className='card'>
            <h2>Hola Bienvenido /a</h2>
            <div className='description'>
                <article className='card-perfil'>
                    <img src={gabriel} alt="" />
                    <h3>Gabriel Sanchez</h3>
                    <h4>Desarrollador Front-End</h4>
                </article>
                <article className='info-perfil'>
                    
                    <p>- Soy un apasionado al desarrollo web, actualmente estudio en la Universidad del Pacifico formándome como Ingeniero de sistemas, también estudio en Academlo donde estoy desarrollando habilidades como desarrollador web Full-stack, construyendo proyectos para afianzar mis habilidades como desarrollador y fortalecer el trabajo en equipo

                        <br></br>
                        <br></br>
                        - Soy autodidacta me gusta estar siempre adquiriendo conocimientos nuevos que nutran mi capacidad para el desarrollo de soluciones de problemas que se presenten, siempre abierto para recibir consejos he indicaciones que me ayuden en mi crecimiento personal y laboral

                        <br></br>
                        <br></br>
                        - Me considero una persona muy responsable, con muchas ganas de explotar mis habilidades, siempre abierto al aprendizaje. Soy atleta de alto rendimiento y creo que mi dedicación y disciplina que he desarrollado en mi vida deportiva de igual manera la aplico para mi formación y desarrollo de mis proyectos</p>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Header