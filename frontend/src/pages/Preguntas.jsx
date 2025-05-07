import React from "react";
import '../css/styles.css';

export default function Preguntas(){

    return (
        <div className='col-md-6 left-section'>
            <div>
                <div className="f-header">
                    <h1>PREGUNTAS FRECUENTES</h1>
                </div>
            

            <h2>¿Qué es esta plataforma y cómo funciona?</h2>
            <p>Es una herramienta que conecta voluntarios con empresas
            u organizaciones que necesitan apoyo. Puedes registrarte
            como voluntario para encontrar oportunidades o como
            empresa para publicar vacantes de voluntariado.</p>

            <h2>¿Tiene algún costo registrarse o participar?</h2>
            <p>No, el registro y el uso de la plataforma son completamente
            gratuitos tanto para voluntarios como para empresas.</p>

            <h2>¿Quién puede registrarse en la plataforma?</h2>
            <p>Cualquier persona mayor de edad interesada en ayudar y
            cualquier empresa u organización sin fines de lucro que
            necesite voluntarios.</p>
        </div>
        </div>
    )
}