import React from 'react'

export default function Login() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 left-section'>
                <h1>ELEMENT</h1>
                <p>CONECTANDO CORAZONES CON CAUSAS</p>
            </div>
            <div class="col-md-6 right-section">
                <h2>INICIAR SESIÓN</h2>
                <form>
                    <div className="form-group">
                        <label for="email">CORREO ELECTRONICO</label>
                        <input type="email" className="form-control" id="email" name="email" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="password">CONTRASEÑA</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div><br />
                    <button type="submit" className="btn btn-primary">INICIAR SESIÓN</button>
                    <div className="mt-3 text-center">
                    <a href="#">REGISTRARSE</a>
                </div>
                </form>
                </div>
            </div>
        </div>

  )
}
