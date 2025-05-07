import { useState, useEffect } from "react"
import { ObtenerOrganizaciones } from "../../Services/OrganizacionService.js"


export default function ListarOrganizaciones() {

  const [organizaciones, setOrganizaciones] = useState([])
  const [error, setError] = useState('')

  useEffect(( ) => {
    fecthOrganizaciones()
  }, [])

  const fecthOrganizaciones = async () => {
    try {

      const respuesta = await ObtenerOrganizaciones()
      setOrganizaciones(respuesta)
    } catch (error) {
      setError(error)
    }

  }

  return (
    <div className='container'>
      <h1 className='text-center'>Listado de Organizaciones</h1>
      <table className="table table-striped">
        <thead>
          <tr className='text-center'>
            <th scope="col">Código</th>
            <th scope="col">Nombre Organización</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo Electronico</th>
            <th scope="col">Dirección</th>
            <th scope="col">Código Ubicación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {organizaciones.map((org) =>
            <tr key={org.ID_ORGANIZACION} className='text-center'>
              <td scope="row">{org.ID_ORGANIZACION}</td>
              <td scope="row">{org.NOMBRE_ORGANIZACION}</td>
              <td scope="row">{org.TELEFONO}</td>
              <td scope="row">{org.EMAIL}</td>
              <td scope="row">{org.DIRECCION}</td>
              <td scope="row">{org.ID_UBICACION}</td>
              <td scope="row"><button className="btn btn-primary">Editar</button>
                <button className="btn btn-primary">Eliminar</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}