import './CarListAd.css';

export default function CarListAd({ carAd }) {
  return (
    <div className="CarListAd">
      <div className="emoji flex-ctr-ctr">{carAd.description}</div>
      <div className="name">{carAd.title}</div>
      <div className="buy">
        <span>${carAd.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}