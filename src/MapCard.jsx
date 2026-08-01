import { Link } from "react-router-dom";

export default function MapCard({ map }) {
  return (
    <Link to={`/maps/${map.id}`} className="map-card">
      <div className="map-name">{map.name}</div>
      <div className="map-img-grid">
        <img src={`${import.meta.env.BASE_URL}maps/${map.imgName}.png`} alt={map.id}/>
      </div>
    </Link>
  );
}