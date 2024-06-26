import express from 'express'
import {
    createMicro,
    getAllMicros,
    getMicroByName,
    updateMicro,
    softDeleteMicro,
    deleteMicro
} from '../controllers/microController.js'

const microRoute = express.Router()

microRoute.route('/')
    .post(createMicro)
    .get(getAllMicros)

microRoute.route('/:name_URL')
    .get(getMicroByName)
    .put(updateMicro)

microRoute.route('/delete/:name_URL')
    .put(softDeleteMicro)
    .delete(deleteMicro)

export default microRoute