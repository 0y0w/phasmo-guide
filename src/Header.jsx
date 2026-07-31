import { Link } from "react-router-dom";

export default function Header({ activePage = 'ghosts' }) {
  return (
    <header className="header">
      <Link to="/" className="logo">PHASMOPHOBIA</Link>
      <nav className="nav">
        <Link href="/" className={`nav-item ${activePage === 'Ghosts' ? 'active' : ''}`}>鬼魂</Link>
        <Link href="/Items" className={`nav-item ${activePage === 'Items' ? 'active' : ''}`}>道具</Link>
        <Link href="/Maps" className={`nav-item ${activePage === 'Maps' ? 'active' : ''}`}>地圖</Link>
        <Link href="/Challenges" className={`nav-item ${activePage === 'Challenges' ? 'active' : ''}`}>每周挑戰</Link>
        <Link href="/Tutorial" className={`nav-item ${activePage === 'Tutorial' ? 'active' : ''}`}>新手教學</Link>
        <div className="dropdown">
          <Link href="" className="nav-item">統計</Link>
          <div className="dropdown-content">
            <Link href="/GhostSpeed">鬼速</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link href="" className="nav-item">其他</Link>
          <div className="dropdown-content">
            <Link href="/Acheivement">成就</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}