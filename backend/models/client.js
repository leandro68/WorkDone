const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: String,
    subscriber: Boolean,
    subscriptionCost: Number
})

clientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Client', clientSchema)