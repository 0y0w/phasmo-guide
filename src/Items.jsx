import './App.css';
import Header from './Header';

import { items } from './data.jsx'
import { ItemCard } from './Card.jsx';

export default function Items() {

  const normalItems = items.filter(item => !item.tag.includes("cursed"))
  const cursedItems = items.filter(item => item.tag.includes("cursed"))

  return (
    <div className="container">
      <Header activePage='Items'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">道具</h1>
        </div>
        <div>
          <section className='item-area'>
            <div className='item-title'>一般道具</div>
            <div className={`item-card-area`}>
              {
              normalItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))
              }
            </div>
          </section>
          <section className='item-area'>
            <div className='item-title'>詛咒道具</div>
            <div className={`item-card-area`}>
              {
              cursedItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}