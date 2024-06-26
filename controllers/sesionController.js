import {
    NatTareas,
    MagnCargas,
    OrientContenido
} from "../models/Sesion.js"

// Create
const createSesion = async (req, res) => {
    const sesion = req.body
    let newSesion;

    switch(sesion.type){
        case 'naturaleza-tareas':
            newSesion = NatTareas
            break;
        case 'magnitud-cargas':
            newSesion = MagnCargas
            break;
        case 'orientacion-contenido':
            newSesion = OrientContenido
            break;
        default:
            return res.status(400).json({ msg: "Tipo no válido" });
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
const getSesionsByType = async (req, res) => {
    const { type } = req.params;
    let Model;

    switch(type){
            case 'naturaleza-tareas':
                Model = NatTareas
                break;
            case 'magnitud-cargas':
                Model = MagnCargas
                break;
            case 'orientacion-contenido':
                Model = OrientContenido
                break;
            default:
                return res.status(400).json({ msg: "Tipo no válido" });
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
    let Model;

    switch(type){
            case 'naturaleza-tareas':
                Model = NatTareas
                break;
            case 'magnitud-cargas':
                Model = MagnCargas
                break;
            case 'orientacion-contenido':
                Model = OrientContenido
                break;
            default:
                return res.status(400).json({ msg: "Tipo no válido" });
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
    let Model;

    switch(type){
            case 'naturaleza-tareas':
                Model = NatTareas
                break;
            case 'magnitud-cargas':
                Model = MagnCargas
                break;
            case 'orientacion-contenido':
                Model = OrientContenido
                break;
            default:
                return res.status(400).json({ msg: "Tipo no válido" });
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
    let Model;

    switch(type){
            case 'naturaleza-tareas':
                Model = NatTareas
                break;
            case 'magnitud-cargas':
                Model = MagnCargas
                break;
            case 'orientacion-contenido':
                Model = OrientContenido
                break;
            default:
                return res.status(400).json({ msg: "Tipo no válido" });
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
    let Model;

    switch(type){
            case 'naturaleza-tareas':
                Model = NatTareas
                break;
            case 'magnitud-cargas':
                Model = MagnCargas
                break;
            case 'orientacion-contenido':
                Model = OrientContenido
                break;
            default:
                return res.status(400).json({ msg: "Tipo no válido" });
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
    getSesionsByType,
    getSesionByName,
    updateSesion,
    softDeleteSesion,
    deleteSesion
}