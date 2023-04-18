import './HomePage.css';
import { useState, useEffect, useRef } from 'react';
import * as carsAPI from '../../utilities/api/cars'
import FilterList from '../../components/FilterList/FilterList';
import CarList from '../../components/CarList/CarList';

export default function HomePage() {
  const [Cars, setCars] = useState([]);
  const [activeFilterYear, setActiveFilterYear] = useState('');
  const [activeFilterMake, setActiveFilterMake] = useState('');
  const [activeFilterModel, setActiveFilterModel] = useState('');
  const [activeFilterTrim, setActiveFilterTrim] = useState('');

  const yearFiltersRef = useRef([]);
  const makeFiltersRef = useRef([]);
  const modelFiltersRef = useRef([]);
  const trimFiltersRef = useRef([]);
  
  function filterIsEqual(object1) {
    var myStringArray1 = ["year", "make", "model", "trim"];
    var myStringArray2 = [activeFilterYear, activeFilterMake, activeFilterModel, activeFilterTrim];
    var arrayLength = myStringArray1.length;
    for (var i = 0; i < arrayLength; i++) {
      if (myStringArray2[i] !== "All") {
        if (object1[myStringArray1[i]] !== myStringArray2[i]) {
          return false;
        }
      }
    }
    return true;
  }

  useEffect(function() {
    async function getCars() {
      const cars = await carsAPI.getAll();
      // Remove dups of category names using a Set, then spread Set back into an array literal
      yearFiltersRef.current = ["All", ...new Set(cars.map(car => car.filter.year))];
      makeFiltersRef.current = ["All", ...new Set(cars.map(car => car.filter.make))];
      modelFiltersRef.current = ["All", ...new Set(cars.map(car => car.filter.model))];
      trimFiltersRef.current = ["All", ...new Set(cars.map(car => car.filter.trim))];
      setCars(cars);
      setActiveFilterYear(yearFiltersRef.current[0]);
      setActiveFilterMake(makeFiltersRef.current[0]);
      setActiveFilterModel(modelFiltersRef.current[0]);
      setActiveFilterTrim(trimFiltersRef.current[0]);
    }
    getCars();
  }, []);

  return (
    <main className="HomePage">
      <aside>
        <FilterList
          filters={yearFiltersRef.current}
          activeFilter={activeFilterYear}
          setActiveFilter={setActiveFilterYear}
        />
        <FilterList
          filters={makeFiltersRef.current}
          activeFilter={activeFilterMake}
          setActiveFilter={setActiveFilterMake}
        />
        <FilterList
          filters={modelFiltersRef.current}
          activeFilter={activeFilterModel}
          setActiveFilter={setActiveFilterModel}
        />
        <FilterList
          filters={trimFiltersRef.current}
          activeFilter={activeFilterTrim}
          setActiveFilter={setActiveFilterTrim}
        />
      </aside>
      <CarList cars={Cars.filter(car => filterIsEqual(car.filter))} />
    </main>
  );
}