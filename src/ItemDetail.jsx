import { useParams, Link } from 'react-router-dom';

import Header from './Header'; // 記得引入你的 Header
import { items } from './data'; // 引入你的地圖資料陣列
import SoundPlayer from './audioPlayer';

import './App.css'

export default function ItemDetail() {
  const { itemId } = useParams();
  
  const itemData = items.find(i => i.id === itemId);

  if (!itemData) {
    return (
      <div className="container">
        <Header activePage='Items'/>
        <main className="main-content" style={{ textAlign: 'center', padding: '50px' }}>
          <h2>不要再亂打了!</h2>
          <p>系統中不存在代號為「{itemId}」的道具。</p>
          <Link to="/items" style={{ color: 'var(--primary)', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
            點此返回道具列表
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Header activePage='Items'/>
      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">{ itemData.name }<dt>Update: 2026.08.05</dt></h1>
        </div>
          {itemData.content && itemData.content.map((content, index) =>(
            <div key={`area${index}`} className='item-detail-area'>
              {content.map(c =>(
                <div key={c.title} className='item-detail-content-block'>
                  <div className='item-detail-text-area'>
                    <div className='item-detail-title'>{c.title}</div>
                    <div className='item-detail-text'>{c.text}</div>
                    {c.audio && <div className='item-detail-audio'><SoundPlayer key={c.audio.text} src={`${import.meta.env.BASE_URL}audio/${c.audio.path}.mp3`} />{c.audio.text}</div>}
                  </div>
                  {c.imgPath && <div className={c.imgClass ? c.imgClass : 'item-detail-img-grid'}><img src={`${import.meta.env.BASE_URL}item/${c.imgPath}`} alt={c.imgPath} /></div>}
                </div>
              ))}
            </div>
          ))}
        <Link to="https://phasmophobia.fandom.com/zh/wiki/裝備" target='_blank' rel='noopener noreferrer' className='link'>
          前往維基
        </Link>
      </main>
    </div>
  );
}