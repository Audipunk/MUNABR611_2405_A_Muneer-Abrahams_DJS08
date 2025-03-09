import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [id]);

  if (!van) return <p>Loading...</p>;

  return (
    <div>
      <h1>{van.name}</h1>
      <p>Type: {van.type}</p>
      <p>Price: ${van.price}/day</p>
    </div>
  );
}

export default VanDetail;
