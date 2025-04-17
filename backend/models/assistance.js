const mongoose = require('mongoose')

const assistanceSchema = new mongoose.Schema({
    client: String,
    type: String,
    startTravel: Date,
    startWork: Date,
    endWork: Date,
    endTravel: Date,
    request: String,
    report: String,
    travelTransport: String,
    travelCost: Number,
    })

assistanceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Assistance', assistanceSchema)