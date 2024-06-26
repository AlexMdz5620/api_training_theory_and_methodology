import mongoose from "mongoose";
import baseCiclo from "./baseCiclo.js"

const Macro = baseCiclo.discriminator('Macro', mongoose.Schema({}))
const Meso = baseCiclo.discriminator('Meso', mongoose.Schema({}))
const Micro = baseCiclo.discriminator('Micro', mongoose.Schema({}))

export {
    Macro,
    Meso,
    Micro
}
