import { Link, useNavigate } from "react-router-dom";

// 證據中文名 -> 道具頁 id 對應表（僅有對應道具頁的證據可跳轉）
const evidenceNameToItem = {
  'EMF 5級': 'EMFReader',
  '點陣投影儀': 'dotsProjector',
  '紫外線': 'UVLight',
  '刺骨寒溫': 'thermometer',
  '靈球': 'videoCamera',
  '鬼魂筆跡': 'book',
  '通靈盒': 'spiritBox'
};

// 證據 tag：有對應道具頁時渲染為跳轉連結，否則為普通 tag
export function EvTag({ name }) {
  const itemId = evidenceNameToItem[name];
  if (itemId) {
    return <Link to={`/items/${itemId}`} className="ev-tag">{name}</Link>;
  }
  return <span className="ev-tag">{name}</span>;
}

export function GhostCard({ ghost }) {
  // 外層用 div + 匯程式化導航，避免巢狀 <a>（內部 EvTag 本身是連結）
  const navigate = useNavigate();
  return (
    <div
      className="ghost-card" style={{ cursor: 'pointer' }}
      onClick={() => navigate({ pathname: '/', hash: `#${ghost.id}` })}
    >
      <div className="ghost-name">
        {ghost.name}
        {ghost.tag && (<span className="ghost-tag">{ghost.tag}</span>)}
      </div>
      <div className="ghost-evidence">
        {ghost.evidenceNames.map((ev, index) => (
          // 卡片內的證據 tag 僅作標示，不跳轉
          <span key={index} className="ev-tag">{ev}</span>
        ))}
      </div>
      <div className="ghost-desc">{ghost.desc}</div>
    </div>
  );
}

export function MapCard({ map }) {
  return (
    <Link to={`/maps/${map.id}`} className="map-card">
      <div className="map-name">{map.name}</div>
      <div className="map-img-grid">
        <img src={`${import.meta.env.BASE_URL}maps/${map.imgName}.png`} alt={map.id}/>
      </div>
    </Link>
  );
}

export function ItemCard({ item }) {
  return (
     <Link to={`/items/${item.id}`} className="item-card">
      <div className="item-img-grid"><img src={`${import.meta.env.BASE_URL}item/${item.tag==="cursed" ? `${item.id}.png` : `${item.id}_T2.webp`}`} alt={`${item.id}_T2.webp`} /></div>
      <div className="item-desc-grid">
        <div className="item-desc-title">{item.name}{item.tag==="ev" && <span className="item-desc-tag">證據</span>}</div>
        <div className="item-desc-content">{item.desc}</div>
      </div>
    </Link>
  );
}
