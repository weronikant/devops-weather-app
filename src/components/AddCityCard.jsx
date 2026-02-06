import './AddCityCard.css';

export function AddCityCard() {
  return (
    <button className="addCard" type="button">
      <div className="addCard__plus">＋</div>
      <div className="addCard__title">Add City</div>
      <div className="addCard__subtitle">Track another location</div>
    </button>
  );
}
