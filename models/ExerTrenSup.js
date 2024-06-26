import mongoose from "mongoose";
import ExerciseTrenSup from './TrenSup.js'

const Espalda = ExerciseTrenSup.discriminator('Espalda', mongoose.Schema({}))
const Pecho = ExerciseTrenSup.discriminator('Pecho', mongoose.Schema({}))
const Hombro = ExerciseTrenSup.discriminator('Hombro', mongoose.Schema({}))
const Biceps = ExerciseTrenSup.discriminator('Biceps', mongoose.Schema({}))
const Triceps = ExerciseTrenSup.discriminator('Triceps', mongoose.Schema({}))
const Antebrazo = ExerciseTrenSup.discriminator('Antebrazo', mongoose.Schema({}))
const Abdomen = ExerciseTrenSup.discriminator('Abdomen', mongoose.Schema({}))

export {
    Espalda,
    Pecho,
    Hombro,
    Biceps,
    Triceps,
    Antebrazo,
    Abdomen
}