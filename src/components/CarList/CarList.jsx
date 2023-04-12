import './CarList.css';
import CarListAd from '../CarListAd/CarListAd';

export default function CarList({ cars }) {
  const carAds = cars.map(car =>
    <CarListAd
      key={car._id}
      carAd={car}
    />
  );
  return (
    <main className="CarList">
      {carAds}
    </main>
  );
}