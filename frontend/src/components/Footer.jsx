import React from 'react'
import '../css/styles.css'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <h2 className="footer-title">CONTACTO</h2>
        <div className="footer-info">
          <h3>Correo Electrónico</h3>
          <p>contacto@element.com</p>
          <h3>Celular</h3>
          <p>2335654</p>
          <h3>Teléfono</h3>
          <p>31223453</p>
        </div>
        <p className="footer-rights">© 2025 ELEMENT. Todos los derechos reservados.</p>
      </footer>
  </div>
  )
}
