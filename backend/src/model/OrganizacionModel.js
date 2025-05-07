import { getConnection } from "../config/Connection.js";


const getAllOrganizaciones = async () => {

    const con = await getConnection
    const result = await con.request().query('SELECT * FROM ORGANIZACION')
    return result.recordset
}
export { getAllOrganizaciones }