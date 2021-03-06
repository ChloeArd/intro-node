const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchemas = new Schema({
    name : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Product", ProductSchemas);