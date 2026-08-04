import { useState } from 'react';

import './App.css';
import Header from './Header';

import { items } from './data.jsx'
import { ItemCard } from './Card.jsx';

export default function Items() {
  const [normalExpanded, setNormalExpanded] = useState(false);
  const [cursedExpanded, setCursedExpanded] = useState(false);

  const normalItems = items.filter(item => !item.tag.includes("cursed"))
  const cursedItems = items.filter(item => item.tag.includes("cursed"))

  return (
    <div className="container">
      <Header activePage='Items'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">道具<dt>Update: 2026.08.01</dt></h1>
        </div>
        <div>
          <section className='item-area'>
            <div className='item-title'>一般道具</div>
            <div className={`item-card-area ${normalExpanded ? "expanded" : ""}`}>
              {
              normalItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))
              }
            </div>
            <button className="item-expand-btn" onClick={() => setNormalExpanded(!normalExpanded)}>{normalExpanded ? "收起 ▲" : "展示全部 ▼"}</button>
          </section>
          <section className='item-area'>
            <div className='item-title'>詛咒道具</div>
            <div className={`item-card-area ${cursedExpanded ? "expanded" : ""}`}>
              {
              cursedItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))
              }
            </div>
            <button className="item-expand-btn" onClick={() => setCursedExpanded(!cursedExpanded)}>{cursedExpanded ? "收起 ▲" : "展示全部 ▼"}</button>
          </section>
        </div>
      </main>
    </div>
  );
}