import mongoose from "mongoose";
import baseCapacity from "./baseCapacity.js";

const Adaptation = baseCapacity.discriminator('Adaptation', mongoose.Schema({}))
const Balance = baseCapacity.discriminator('Balance', mongoose.Schema({}))
const Differentation = baseCapacity.discriminator('Differentation', mongoose.Schema({}))
const GenDynCoor = baseCapacity.discriminator('General_Dynamic_Coordinative', mongoose.Schema({}))
const Orientation = baseCapacity.discriminator('Orientation', mongoose.Schema({}))
const Reaction = baseCapacity.discriminator('Reaction', mongoose.Schema({}))
const Rhythm = baseCapacity.discriminator('Rhythm', mongoose.Schema({}))

export {
    Adaptation,
    Balance,
    Differentation,
    GenDynCoor,
    Orientation,
    Reaction,
    Rhythm
}