import axios from 'axios'

const api = 'http://localhost:3000/listarorg'

export const ObtenerOrganizaciones = async ()=>{
    const listadoOrg = await axios.get(api)
    return listadoOrg.data
}
