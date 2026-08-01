import { Link } from 'react-router-dom';

import './App.css';
import Header from './Header';

export default function Items() {
  return (
    <div className="container">
      <Header activePage='Items'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">道具<udt>2026.08.01</udt></h1>
        </div>
        <div>
        內容待新增...
          <br />
          <Link to="https://phasmophobia.fandom.com/zh/wiki/裝備" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
            前往官方維基
          </Link>
        </div>
      </main>
    </div>
  );
}