import './CarListAd.css';

export default function CarListAd({ carAd }) {
  return (
    <div className="CarListAd">
      <div className="emoji flex-ctr-ctr">{carAd.emoji}</div>
      <div className="name">{carAd.name}</div>
      <div className="buy">
        <span>${carAd.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}