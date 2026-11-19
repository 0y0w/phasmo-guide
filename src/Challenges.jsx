import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { challenges } from './data';

// 依圖片順序排列裝備（顏色僅與道具 tier 相關：T1 黑 / T2 藍 / T3 紅）
const EQUIP_ORDER = [
  '點陣投影儀', 'EMF讀取儀', '鬼魂筆記', '通靈盒', '溫度計',
  '紫外線燈光', '攝像機', '手電筒', '十字架', '火光', '頭戴設備', '點火器',
  '薰香', '運動感測器', '收音器', '相機', '鹽', '理智藥',
  '錄音機', '聲音感測器', '三腳架',
];

const EQUIP_RANK = Object.fromEntries(EQUIP_ORDER.map((name, i) => [name, i]));

function sortEquips(equips) {
  return [...equips].sort((a, b) => {
    const ra = (EQUIP_RANK[a.name] ?? 999) * 10 + a.tier;
    const rb = (EQUIP_RANK[b.name] ?? 999) * 10 + b.tier;
    return ra - rb;
  });
}

// 本週挑戰計算：每周一 08:00 輪換，26 個挑戰循環
// 錨點：2026-01-05（週一）顯示 index 1 的挑戰；此後每過一週 index +1（循環）
// 若輪換順序與實況不符，只需調整此錨點日期即可校正
const ANCHOR_MONDAY = new Date('2025-12-29T08:00:00+08:00');

function getCurrentChallengeIndex() {
  const now = new Date();
  const anchor = ANCHOR_MONDAY;
  const week = Math.floor((now - anchor) / (7 * 24 * 60 * 60 * 1000));
  const count = challenges.length;
  return ((week % count) + count) % count; // 0-based index into challenges
}

export default function Challenges() {
  const currentIdx = getCurrentChallengeIndex();
  // 本週挑戰排最前，其餘依原順序
  const sorted = [...challenges.slice(currentIdx), ...challenges.slice(0, currentIdx)];
  const currentId = challenges[currentIdx].index;

  return (
    <div className="container">
      <Header activePage='Challenges'/>
      <main className="main-content">
        <div className="section-header">
          <div className="section-title">每周挑戰</div>
        </div>
        <div className='desc-area'>
          <div className='desc-content'>挑戰模式以專家難度為基礎調整，獎勵調整數固定為 1 倍。完成指定地圖的每週任務可獲得 $5,000 與 5,000 XP。每周一 08:00 輪換。</div>

          {sorted.map(ch => (
            <div key={ch.index} className='desc-block challenge-block'>
              <div className='desc-title'>
                {ch.name}
                {ch.index === currentId && <span className='challenge-current-tag'>本週挑戰</span>}
              </div>
              <div className='challenge-row'>
                <div className='challenge-row-label'>地圖</div>
                <div className='challenge-flow'>
                  <Link to={`/maps/${ch.map_id}`} className='map-tag'>{ch.map}</Link>
                </div>
              </div>

              {/* 難度：自然流動排列 */}
              <div className='challenge-row'>
                <div className='challenge-row-label'>難度</div>
                <div className='challenge-flow'>
                  {(ch.difficulty || []).map((d, j) => {
                    const [k, v] = Object.entries(d)[0];
                    return <span key={j} className='diff-tag'>{k}：{v}</span>;
                  })}
                </div>
              </div>

              {/* 裝備：依圖片順序自然流動排列 */}
              <div className='challenge-row'>
                <div className='challenge-row-label'>裝備</div>
                <div className='challenge-flow'>
                  {sortEquips(ch.available_equipment || []).map(eq => (
                    <span key={`${eq.name}-${eq.tier}`} className={`equip-tag eq-t${eq.tier}`}>
                      <span className="equip-name">{eq.name}</span>
                      <span className="equip-meta">T{eq.tier}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
