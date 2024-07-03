import mongoose from "mongoose"

const baseVolDistribution = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dynamic: {
        type: [Number],
        required: true
    },
    loads_per_week: {
        type: [Number],
        required: true
    },
    sum_K: {
        type: Number,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
})

export default mongoose.model('BaseVolDistribution', baseVolDistribution)