const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const carSchema = new Schema({
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 }
},{
    timeseries: true
})

module.exports = mongoose.model('Car', carSchema);