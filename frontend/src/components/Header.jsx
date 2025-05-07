import React from 'react'
import  "../css/styles.css"

export default function Header() {
  return (
    <nav className="navbar">
    <a href="/" className='logo'>ELEMENT</a>
    <ul className="nav-links">
      <li><a href="/testimonios">TESTIMONIOS</a></li>
      <li><a href="/preguntas">PREGUNTAS FRECUENTES</a></li>
      <li><a href="/login"><button className="login-btn">INICIAR SESIÓN</button></a></li>
    </ul>
  </nav>
  )
}