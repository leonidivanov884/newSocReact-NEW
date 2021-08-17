const {Schema, model} = require('mongoose')

const Group = new Schema({
    logo: {type: String, required: true},
    name: {type: String, required: true},
    info: {type: String, required: true},
    slogan: {type: String, required: true},
    users: {type: Number},
    banner: {type: String},
    news: [
        {
            text: {type: String},
            title: {type: String},
            img: {type: String},
            banner: {type: String,},
            date: {type: String},
        }
    ]
})

module.exports = model('Group', Group)