import baseSesion from "../models/baseSesion.js"
import {
    NatTareas,
    MagnCargas,
    OrientContenido
} from "../models/Sesion.js"

const models = {
    'naturaleza-tareas': NatTareas,
    'magnitud-cargas': MagnCargas,
    'orientacion-contenido': OrientContenido
}

// Create
const createSesion = async (req, res) => {
    const { type, ...sesion } = req.body
    let newSesion = models[type]

    if (!newSesion) {
        return res.status(400).json({ msg: "Invalid sesion" });
    }

    try {
        if(newSesion){
            const sesionCreated = await newSesion.create(sesion)
            return res.status(201).json({
                msg: 'Create new sesion',
                sesion: sesionCreated
            })
        } else {
            res.status(400).json({
                msg: 'Failed to create sesion'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}
// Read
const getAllSesions = async (req, res) => {
    try {
        const sesion = await baseSesion.find();
        res.status(200).json({
            msg: "Sesion retrieved successfully",
            sesion
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}
const getSesionsByType = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const getSesionsByType = await Model.find()
        if(getSesionsByType && getSesionsByType.length > 0) {
            res.status(200).json({
                msg: 'Get all sesion',
                sesion: getSesionsByType
                })
        } else {
            res.status(404).json({
                msg: 'No Sesion found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

const getSesionByName = async (req, res) => {
    const { type, name_URL } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const getSesionByName = await Model.findOne({ name_URL: name_URL })
        if(getSesionByName){
            res.status(200).json({
                msg: 'Get sesion by name',
                sesion: getSesionByName
                })
        } else {
            res.status(404).json({
                msg: 'Sesion not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// Update
const updateSesion = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const nameSesion = req.params.name_URL
        const sesionUpdate = await Model.findOneAndUpdate({ name_URL: nameSesion }, req.body)
        if(sesionUpdate){
            res.status(200).json({
                msg: 'Sesion updated',
                sesion: sesionUpdate
                })
        } else {
            res.status(404).json({
                msg: 'Sesion not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// soft delete
const softDeleteSesion = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const nameSesion = req.params.name_URL
        const sesionUpdate = await Model.findOneAndUpdate({ name_URL: nameSesion}, {isDeleted: true})
        if(sesionUpdate){
            res.status(200).json({
                msg: 'Sesion deleted',
                sesion: sesionUpdate
            })
        } else {
            res.status(404).json({
                msg: 'Sesion not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// Delete
const deleteSesion = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const nameSesion = req.params.name_URL
        const deleteSesion = await Model.findOneAndDelete({ name_URL: nameSesion })
        if(deleteSesion){
            res.status(200).json({
                msg: 'Sesion deleted',
                Sesion: deleteSesion
                })
        } else {
            res.status(404).json({
                msg: 'Sesion not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

export {
    createSesion,
    getAllSesions,
    getSesionsByType,
    getSesionByName,
    updateSesion,
    softDeleteSesion,
    deleteSesion
}