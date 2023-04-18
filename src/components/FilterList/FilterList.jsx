import './FilterList.css';

export default function FilterList({ filters, activeFilter, setActiveFilter }) {
  const handleChange = event => {
    setActiveFilter(event.target.value);
  };
  const fltrs = filters.map(filter =>
    <option 
      key={filter}
      value={filter}
      className={filter === activeFilter ? 'active' : ''}
    >
      {filter}
    </option>
  );
  return (
    <select className="FilterList" onChange={handleChange}>
      {fltrs}
    </select>
  );
}