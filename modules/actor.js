const mongoose = require('mongoose')



const actorSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})
const Actor = mongoose.model('Actor', actorSchema)
module.exports = Actor