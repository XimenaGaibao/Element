import React from 'react'
import '../css/styles.css'

export default function Home() {
  return (
    <div>
        <header className="hero">
        <div className="hero-overlay">
          <h2>Conectando corazones con causas</h2>
          <p>Únete y haz la diferencia</p>
          <div className="hero-buttons">
            <a href="/login"><button className="primary-btn">INICIAR SESIÓN</button></a>
            <a href="/registro"><button className="secondary-btn">REGISTRARSE</button></a>
          </div>
        </div>
      </header>
    </div>
  )
}

