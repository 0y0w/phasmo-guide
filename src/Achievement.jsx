import { Link } from 'react-router-dom';

import './App.css';
import Header from './Header';

export default function Achievement() {
  return (
    <div className="container">
      <Header activePage=''/>

      <main className="main-content">
        <div className="section-header">
          <div className="section-title">成就</div>
        </div>
        <div>
        內容待新增...
          <br />
          <Link to="https://phasmophobia.fandom.com/zh/wiki/成就" target='_blank' rel='noopener noreferrer' className='link'>
            前往維基
          </Link>
        </div>
      </main>
    </div>
  );
}