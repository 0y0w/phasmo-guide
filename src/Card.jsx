import { Link } from "react-router-dom";

export function GhostCard({ ghost }) {
  return (
    <Link to={`/ghosts/${ghost.id}`} className="ghost-card">
      <div className="ghost-name">
        {ghost.name}
        {ghost.tag && (<span className="ghost-tag">{ghost.tag}</span>)}
      </div>
      <div className="ghost-evidence">
        {ghost.evidenceNames.map((ev, index) => (
          <span key={index} className="ev-tag">{ev}</span>
        ))}
      </div>
      <div className="ghost-desc">{ghost.desc}</div>
    </Link>
  );
}

export function MapCard({ map }) {
  return (
    <Link to={`/maps/${map.id}`} className="map-card">
      <div className="map-name">{map.name}</div>
      <div className="map-img-grid">
        <img src={`${import.meta.env.BASE_URL}maps/${map.imgName}.png`} alt={map.id}/>
      </div>
    </Link>
  );
}

export function ItemCard({ item }) {
  return (
     <Link to={`/items/${item.id}`} className="item-card">
      <div className="item-img-grid"><img src={`${import.meta.env.BASE_URL}item/${item.tag==="cursed" ? `${item.id}.png` : `${item.id}_T2.webp`}`} alt={`${item.id}_T2.webp`} /></div>
      <div className="item-desc-grid">
        <div className="item-desc-title">{item.name}{item.tag==="ev" && <span className="item-desc-tag">證據</span>}</div>
        <div className="item-desc-content">{item.desc}</div>
      </div>
    </Link>
  );
}
