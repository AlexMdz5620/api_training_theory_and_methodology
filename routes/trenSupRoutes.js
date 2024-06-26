import express from 'express'
import {
    createExercise,
    getExercicesByMuscleGroup,
    getExerciceByName,
    updateExercise,
    softDeleteExercise,
    deleteExercise
} from '../controllers/trenSupController.js'

const trenSupRute = express.Router()

trenSupRute.route('/:muscle_group')
    .post(createExercise)
    .get(getExercicesByMuscleGroup)

trenSupRute.route('/:muscle_group/:name_URL')
    .get(getExerciceByName)
    .put(updateExercise)

trenSupRute.route('/:muscle_group/delete/:name_URL')
    .put(softDeleteExercise)
    .delete(deleteExercise)

export default trenSupRute