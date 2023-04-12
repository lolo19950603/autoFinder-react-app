import './HomePage.css';
import { useState, useEffect, useRef } from 'react';
import * as carsAPI from '../../utilities/api/cars'
import CarList from '../../components/CarList/CarList';

export default function HomePage() {
  const [Cars, setCars] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getCars() {
      const cars = await carsAPI.getAll();
      // Remove dups of category names using a Set, then spread Set back into an array literal
      categoriesRef.current = [...new Set(cars.map(car => car.category.name))];
      setCars(cars);
    }
    getCars();
  }, []);

  return (
    <main className="HomePage">
      <aside>
        <CarList cars={Cars} />
      </aside>
    </main>
  );
}