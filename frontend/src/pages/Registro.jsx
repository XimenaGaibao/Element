import React from 'react'
import '../css/styles.css'

export default function Registro(){
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 left-section'>
                <h1>ELEMENT</h1>
                <p>CONECTANDO CORAZONES CON CAUSAS</p>
            </div>
            <div className="col-md-6 right-section">
                <h2>REGISTRARSE</h2>
                <form>
                <div className="form-group">
                        <label for="namefull">NOMBRE COMPLETO</label>
                        <input type="text" className="form-control" id="namefull" name="namefull" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="pais">PAIS</label>
                        <input type="text" className="form-control" id="pais" name="pais" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="ciudad">CIUDAD</label>
                        <input type="text" className="form-control" id="ciudad" name="ciudad" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="direccion">DIRECCIÓN</label>
                        <input type="text" className="form-control" id="direccion" name="direccion" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="email">CORREO</label>
                        <input type="email" className="form-control" id="email" name="email" required/>
                    </div><br />
                    <div className="form-group">
                        <label for="password">CONTRASEÑA</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div><br />
                    <button type="submit" className="btn btn-primary" href="/">REGISTRARSE</button>
                </form>
                </div>
            </div>
            </div>
    )
}
