import React from 'react'
export default function header() {
  return (
    <div className="container header">
    <div className="row align-items-center">
      <div className="col-md-auto">
        <div className="font-weight-bold logo">ELEMENT</div>
      </div>
      <div className="col-md">
        <ul className="nav justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link">TESTIMONIOS</a></li>
          <li className="nav-item"><a href="#" className="nav-link">CONTACTO</a></li>
          <li className="nav-item"><a href="#" className="nav-link">PREGUNTAS FRECUENTES</a></li>
          <li className="nav-item"><a href="#" className="nav-link login-button">INICIAR SESIÓN</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
