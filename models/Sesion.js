import mongoose from "mongoose";
import BaseSesion from "./baseSesion.js"

const NatTareas = BaseSesion.discriminator('NatTareas', mongoose.Schema({}))
const MagnCargas = BaseSesion.discriminator('MagnCargas', mongoose.Schema({}))
const OrientContenido = BaseSesion.discriminator('OrientContenido', mongoose.Schema({}))

export {
    NatTareas,
    MagnCargas,
    OrientContenido
}