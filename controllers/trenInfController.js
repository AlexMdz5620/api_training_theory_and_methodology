import { Cuadriceps, Gluteo, Femoral, Aductor, Pantorrilla, Tibial } from '../models/ExerTrenInf.js'

const models = {
    cuadriceps: Cuadriceps,
    gluteo: Gluteo,
    femoral: Femoral,
    aductor: Aductor,
    pantorrilla: Pantorrilla,
    tibial: Tibial
}

// Create
const createExercise = async (req, res) => {
    const { muscle_group } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }

    try {
        const newExcercise = await Model.create(req.body)
        if(newExcercise){
            return res.status(200).json({
                msg: 'Exercise created successfully',
                excercise: newExcercise
            })
        } else {
            res.status(400).json({
                msg: 'The exercise was not created'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

// Read
const getExercicesByMuscleGroup = async (req, res) => {
    const { muscle_group } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }

    try {
        const excerciseByMuscleGroup = await Model.find({ isDeleted: false })
        if(excerciseByMuscleGroup && excerciseByMuscleGroup.length > 0){
            return res.status(200).json({
                msg: 'Exercises by group',
                exercicers: excerciseByMuscleGroup
            })
        } else {
            res.status(400).json({
                msg: 'Exercices not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

const getExerciceByName = async (req, res) => {
    const { muscle_group, name_URL } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }

    try {
        const excerciseByName = await Model.findOne({ name_URL: name_URL })
        if(excerciseByName){
            return res.status(200).json({
                msg: 'Exercises found successfully',
                exercice: excerciseByName
            })
        } else{
            res.status(400).json({
                msg: 'Exercise not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

// Update
const updateExercise = async (req, res) => {
    const { muscle_group, name_URL } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }

    try {
        const excerciseUpdate = await Model.findOneAndUpdate({ name_URL: name_URL }, req.body )
        if(excerciseUpdate){
            return res.status(200).json({
                msg: 'Exercise updated successfully',
                exercice: excerciseUpdate
            })
        } else {
            res.status(400).json({
                msg: 'Exercise not updated'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

// soft-delete
const softDeleteExercise = async (req, res) => {
    const { muscle_group, name_URL } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }
    
    try {
        const exerciceUpdate = await Model.findOneAndUpdate({name_URL: name_URL}, { isDeleted: true })
        if(exerciceUpdate) {
            return res.status(200).json({
                msg: 'Exercise soft-delete correctly',
                exercice: exerciceUpdate
            })
        } else {
            res.status(400).json({
                msg: 'Failed to update exercice'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

// Delete
const deleteExercise = async (req, res) => {
    const { muscle_group, name_URL } = req.params;
    const Model = models[muscle_group];

    if (!Model) {
        return res.status(400).json({ msg: "Invalid muscle group" });
    }
    
    try {
        const exerciseDeleted = await Model.findOneAndDelete({ name_URL: name_URL })
        if(exerciseDeleted){
            return res.status(200).json({
                msg: 'Exercise deleted succeffully',
                exercice: exerciseDeleted
            })
        } else {
            res.status(400).json({
                msg: 'Exercise not deleted'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

export {
    createExercise,
    getExercicesByMuscleGroup,
    getExerciceByName,
    updateExercise,
    softDeleteExercise,
    deleteExercise
}