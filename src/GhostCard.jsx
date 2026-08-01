import { Link } from "react-router-dom";

export default function GhostCard({ ghost }) {
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