const {Schema, model} = require('mongoose')


const News = new Schema({
    text: {type: String, required: true},
    title: {type: String, required: true},
    idAuthor: {type: String, required: true},
    img: {type: String},
    banner: {type: String},
    date: {type: String},
})

module.exports = model('News', News)