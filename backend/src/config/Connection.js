import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()

const stringConnection = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  options: {
    trustServerCertificate: true,
  }
}

const getConnection = async () => {
  try {
    const pool = await sql.connect(stringConnection)
    console.log('Conectado a la BD')
    return pool
  } catch (err) {
    console.error('Error:', err)
    throw err
  }
}

export { sql, getConnection }
