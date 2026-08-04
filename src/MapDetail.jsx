import { useParams, Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Header from './Header'; // 記得引入你的 Header
import { maps } from './data'; // 引入你的地圖資料陣列

import './App.css'

export default function MapDetail() {
  // 1. 從網址取得 mapId (例如網址是 /maps/tanglewood，mapId 就是 'tanglewood')
  const { mapId } = useParams();
  
  // 2. 去資料庫尋找對應的地圖
  const mapData = maps.find(m => m.id === mapId);

  if (!mapData) {
    return (
      <div className="container">
        <Header activePage='Maps'/>
        <main className="main-content" style={{ textAlign: 'center', padding: '50px' }}>
          <h2>不要再亂打了!</h2>
          <p>系統中不存在代號為「{mapId}」的調查地點。</p>
          <Link to="/maps" style={{ color: 'var(--primary)', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
            點此返回地圖列表
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Header activePage='Maps'/>
      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">{ mapData.name }<dt>Update: 2026.08.01</dt></h1>
        </div>

        <section className="map-area">          
          <div className='map-dis'>
            <TransformWrapper initialScale={1} minScale={1} maxScale={5} centerOnInit={true} wheel={{ step: 0.005 }} panning={{ velocityDisabled: true }}>
              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                <img src={`${import.meta.env.BASE_URL}maps/${mapData.imgName}.png`} alt={mapData.id} />
              </TransformComponent>
            </TransformWrapper>
            
          </div>
          <div className='map-desc-grid'>
            <div className='map-desc-content'>來源：<Link to="https://tybayn.github.io/phasmo-cheat-sheet/" target='_blank' rel='noopener noreferrer' className='link'>Phasmophobia Cheat Sheet</Link></div>
          </div>
        </section>
      </main>
    </div>
  );
}