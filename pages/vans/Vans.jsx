import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

  return (
    <div>
      <button onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
      <button onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
      <button onClick={() => setSearchParams({})}>Clear Filter</button>

      <h2>Available Vans</h2>
      <ul>
        {filteredVans.map((van) => (
          <li key={van.id}>
            <Link to={`/vans/${van.id}`}>{van.name} - {van.type}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vans;
