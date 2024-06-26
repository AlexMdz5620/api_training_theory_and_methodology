import mongoose from "mongoose";
import baseVolDistribution from "./baseVolDistribution.js";

const SumVertSup100 = baseVolDistribution.discriminator('SumVertSup100', mongoose.Schema({}))
const SumVertEqu100 = baseVolDistribution.discriminator('SumVertEqu100', mongoose.Schema({}))
const SystConsts = baseVolDistribution.discriminator('SystConsts', mongoose.Schema({}))

export {
    SumVertSup100,
    SumVertEqu100,
    SystConsts
}