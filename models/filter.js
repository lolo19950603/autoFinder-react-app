const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filterSchema = new Schema({
  year: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  trim: { type: String, required: true },
  bodyType: { type: String, required: true },
  driveTrain: { type: String, required: true },
  fuelType: { type: String, required: true },
  engine: { type: String, required: true },
  transmission: { type: String, required: true },
  seatingCapacity: { type: String, required: true },
  doors: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('filter', filterSchema);