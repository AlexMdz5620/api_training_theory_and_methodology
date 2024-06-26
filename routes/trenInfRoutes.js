import express from 'express'
import {
    createExercise,
    getExercicesByMuscleGroup,
    getExerciceByName,
    updateExercise,
    softDeleteExercise,
    deleteExercise
} from '../controllers/trenInfController.js'

const trenInfRute = express.Router()

trenInfRute.route('/:muscle_group')
    .post(createExercise)
    .get(getExercicesByMuscleGroup)

trenInfRute.route('/:muscle_group/:name_URL')
    .get(getExerciceByName)
    .put(updateExercise)

trenInfRute.route('/:muscle_group/delete/:name_URL')
    .put(softDeleteExercise)
    .delete(deleteExercise)

export default trenInfRute