import { Link } from "react-router-dom";

export default function Header({ activePage = 'ghosts' }) {
  return (
    <header className="header">
      <Link to="/" className="logo">PHASMOPHOBIA</Link>
      <nav className="nav">
        <Link to="/" className={`nav-item ${activePage === 'Ghosts' ? 'active' : ''}`}>鬼魂</Link>
        <Link to="/items" className={`nav-item ${activePage === 'Items' ? 'active' : ''}`}>道具</Link>
        <Link to="/maps" className={`nav-item ${activePage === 'Maps' ? 'active' : ''}`}>地圖</Link>
        <Link to="/challenges" className={`nav-item ${activePage === 'Challenges' ? 'active' : ''}`}>每周挑戰</Link>
        <Link to="/tutorial" className={`nav-item ${activePage === 'Tutorial' ? 'active' : ''}`}>新手教學</Link>
        <div className="dropdown">
          <Link to="" className="nav-item">統計</Link>
          <div className="dropdown-content">
            <Link to="/ghostSpeed">鬼魂移速</Link>
            <Link to="/ghostThreshold">獵殺閾值</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="" className="nav-item">其他</Link>
          <div className="dropdown-content">
            <Link to="/achievement">成就</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}