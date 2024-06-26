import express from 'express'
import {
    createMeso,
    getAllMesos,
    getMesoByName,
    updateMeso,
    softDeleteMeso,
    deleteMeso
} from '../controllers/mesoController.js'

const mesoRoute = express.Router()

mesoRoute.route('/')
    .post(createMeso)
    .get(getAllMesos)

mesoRoute.route('/:name_URL')
    .get(getMesoByName)
    .put(updateMeso)

mesoRoute.route('/delete/:name_URL')
    .put(softDeleteMeso)
    .delete(deleteMeso)

export default mesoRoute