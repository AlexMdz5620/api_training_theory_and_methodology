import mongoose from "mongoose";
import ExerciseTrenInf from './TrenInf.js'

const Cuadriceps = ExerciseTrenInf.discriminator('Cuadriceps', mongoose.Schema({}))
const Gluteo = ExerciseTrenInf.discriminator('Gluteo', mongoose.Schema({}))
const Femoral = ExerciseTrenInf.discriminator('Femoral', mongoose.Schema({}))
const Aductor = ExerciseTrenInf.discriminator('Aductor', mongoose.Schema({}))
const Pantorrilla = ExerciseTrenInf.discriminator('Pantorrilla', mongoose.Schema({}))
const Tibial = ExerciseTrenInf.discriminator('Tibial', mongoose.Schema({}))

export {
    Cuadriceps,
    Gluteo,
    Femoral,
    Aductor,
    Pantorrilla,
    Tibial
}