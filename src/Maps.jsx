import './App.css';
import Header from './Header';

import MapCard from './MapCard';
import { maps } from './data'

export default function Maps() {
  const smallMaps = maps.filter(map => map.scale === 's');
  const mediumMaps = maps.filter(map => map.scale === 'm');
  const largeMaps = maps.filter(map => map.scale === 'l');

  return (
    <div className="container">
      <Header activePage='Maps'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">地圖<udt>Update: 2026.08.01</udt></h1>
        </div>
        <div>
          <div className='map-area'>
            <div className='map-title'>小型地圖</div>
            <div className='map-card-area'>
              {
              smallMaps.map(map => (
                <MapCard key={map.id} map={map} />
              ))
              }
            </div>
          </div>
          <div className='map-area'>
            <div className='map-title'>中型地圖</div>
            <div className='map-card-area'>
              {
              mediumMaps.map(map => (
                <MapCard key={map.id} map={map} />
              ))
              }
            </div>
          </div>
          <div className='map-area'>
            <div className='map-title'>大型地圖</div>
            <div className='map-card-area'>
              {
              largeMaps.map(map => (
                <MapCard key={map.id} map={map} />
              ))
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}