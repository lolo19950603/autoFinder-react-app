const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./filter');
const carSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    filter: { type: Schema.Types.ObjectId, ref: 'filter' },
    price: { type: Number, required: true, default: 0 }
},{
    timeseries: true
})

module.exports = mongoose.model('Car', carSchema);