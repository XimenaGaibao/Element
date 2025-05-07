import { getAllOrg } from "../controller/OrganizacionController.js";
import express from 'express'
const router = express.Router()

router.get('/listarorg', getAllOrg)

export default router
