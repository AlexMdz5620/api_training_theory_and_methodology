import mongoose from "mongoose"
import baseCapacity from "./baseCapacity.js"

const Strenght = baseCapacity.discriminator('Strenght', mongoose.Schema({}))
const Endurance = baseCapacity.discriminator('Endurance', mongoose.Schema({}))
const Velocity = baseCapacity.discriminator('Velocity', mongoose.Schema({}))
const Flexibility = baseCapacity.discriminator('Flexibility', mongoose.Schema({}))

export {
    Strenght,
    Endurance,
    Velocity,
    Flexibility
}