import mongoose from "mongoose";
import baseCapacity from "./baseCapacity.js";

const Synchronization = baseCapacity.discriminator('Sysnchronization', mongoose.Schema({}))
const Orientation = baseCapacity.discriminator('Orientation', mongoose.Schema({}))
const Reaction = baseCapacity.discriminator('Reaction', mongoose.Schema({}))
const Differentation = baseCapacity.discriminator('Differentation', mongoose.Schema({}))
const Balance = baseCapacity.discriminator('Balance', mongoose.Schema({})) //Equilibrio
const Rhythm = baseCapacity.discriminator('Rhythm', mongoose.Schema({}))
const Adaptation = baseCapacity.discriminator('Adaptation', mongoose.Schema({}))

export {
    Synchronization,
    Orientation,
    Reaction,
    Differentation,
    Balance,
    Rhythm,
    Adaptation
}