import express from 'express'
import {
    createSesion,
    getAllSesions,
    getSesionsByType,
    getSesionByName,
    updateSesion,
    softDeleteSesion,
    deleteSesion
} from '../controllers/sesionController.js'

const sesionRoute = express.Router()

sesionRoute.route('/')
    .post(createSesion)
    .get(getAllSesions)

sesionRoute.route('/:type')
    .get(getSesionsByType)

sesionRoute.route('/:type/:name_URL')
    .get(getSesionByName)
    .put(updateSesion)

sesionRoute.route('/:type/delete/:name_URL')
    .put(softDeleteSesion)
    .delete(deleteSesion)

export default sesionRoute