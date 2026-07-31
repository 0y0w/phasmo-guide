export default function Header({ activePage = 'ghosts' }) {
  return (
    <header className="header">
      <a href="/" className="logo">PHASMOPHOBIA</a>
      <nav className="nav">
        <a href="/" className={`nav-item ${activePage === 'Ghosts' ? 'active' : ''}`}>鬼魂</a>
        <a href="/Items" className={`nav-item ${activePage === 'Items' ? 'active' : ''}`}>道具</a>
        <a href="/Maps" className={`nav-item ${activePage === 'Maps' ? 'active' : ''}`}>地圖</a>
        <a href="/Challenges" className={`nav-item ${activePage === 'Challenges' ? 'active' : ''}`}>每周挑戰</a>
        <a href="/Tutorial" className={`nav-item ${activePage === 'Tutorial' ? 'active' : ''}`}>新手教學</a>
        <div className="dropdown">
          <a href="#" className="nav-item">統計</a>
          <div className="dropdown-content">
            <a href="/GhostSpeed">鬼速</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-item">其他</a>
          <div className="dropdown-content">
            <a href="/Acheivement">成就</a>
          </div>
        </div>
      </nav>
    </header>
  );
}