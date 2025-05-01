import { getAllOrganizaciones } from "../model/OrganizacionModel.js"
const getAllOrg = async (req, res) => {

    try {
        const Organizaciones = await getAllOrganizaciones()
        res.json(Organizaciones)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { getAllOrg };
