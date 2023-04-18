require('dotenv').config();
require('./config/database');

const Filter = require('./models/filter');
const Car = require('./models/car');

(async function() {

    await Filter.deleteMany({});
    const filters = await Filter.create([
      {
        year: '2020',
        make: 'Mercedes Benz',
        model: 'E Class',
        trim: 'AMG E53',
        bodyType: 'Wagon',
        driveTrain: 'AWD',
        fuelType: 'Hybrid',
        engine: '6 cylinders',
        transmission: 'Auto',
        seatingCapacity: '5',
        doors: '5'
      },
      {
        year: '2021',
        make: 'Mercedes Benz',
        model: 'C Class',
        trim: 'AMG C43',
        bodyType: 'Coupe',
        driveTrain: 'AWD',
        fuelType: 'Hybrid',
        engine: '6 cylinders',
        transmission: 'Auto',
        seatingCapacity: '4',
        doors: '2'
      },
      {
        year: '2019',
        make: 'BMW',
        model: 'X5',
        trim: 'X5M',
        bodyType: 'SUV',
        driveTrain: 'AWD',
        fuelType: 'Gas',
        engine: '8 cylinders',
        transmission: 'Auto',
        seatingCapacity: '7',
        doors: '5'
      },
      {
        year: '2019',
        make: 'Porsche',
        model: 'Panamera',
        trim: 'Turbo S E-hybrid',
        bodyType: 'Sedan',
        driveTrain: 'AWD',
        fuelType: 'Hybrid',
        engine: '8 cylinders',
        transmission: 'Auto',
        seatingCapacity: '4',
        doors: '4'
      },
      {
        year: '2021',
        make: 'Audi',
        model: '6',
        trim: 'RS6',
        bodyType: 'SUV',
        driveTrain: 'AWD',
        fuelType: 'Gas',
        engine: '8 cylinders',
        transmission: 'Auto',
        seatingCapacity: '7',
        doors: '5'
      }
    ]);

    await Car.deleteMany({});
    const cars = await Car.create([
      {title: 'Hamburger', description: '🍔', filter: filters[0], price: 5.95},
      {title: 'Turkey Sandwich', description: '🥪', filter: filters[0], price: 6.95},
      {title: 'Hot Dog', description: '🌭', filter: filters[0], price: 3.95},
      {title: 'Crab Plate', description: '🦀', filter: filters[1], price: 14.95},
      {title: 'Fried Shrimp', description: '🍤', filter: filters[1], price: 13.95},
      {title: 'Whole Lobster', description: '🦞', filter: filters[1], price: 25.95},
      {title: 'Taco', description: '🌮', filter: filters[2], price: 1.95},
      {title: 'Burrito', description: '🌯', filter: filters[2], price: 4.95},
      {title: 'Pizza Slice', description: '🍕', filter: filters[3], price: 3.95},
      {title: 'Spaghetti', description: '🍝', filter: filters[3], price: 7.95},
      {title: 'Garlic Bread', description: '🍞', filter: filters[3], price: 1.95},
      {title: 'French Fries', description: '🍟', filter: filters[4], price: 2.95},
      {title: 'Green Salad', description: '🥗', filter: filters[4], price: 3.95},
      {title: 'banana', description: '🥗🥗', filter: filters[4], price: 7.95}
    ]);

    console.log(cars)

  process.exit();

})();