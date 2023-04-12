const Car = require('../../models/car');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const cars = await Car.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  cars.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(cars);
}

async function show(req, res) {
  const car = await Car.findById(req.params.id);
  res.json(car);
}