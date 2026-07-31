import { useState } from 'react';
import './App.css';
import Header from './Header';
import GhostCard from './GhostCard';
import { evidences, ghostsData } from './data';

export default function App() {
  // 記錄目前被選中的證據 ID（例如: ['emf', 'box']）
  const [activeEvidence, setActiveEvidence] = useState([]);

  // 點擊證據按鈕的處理函數
  const toggleEvidence = (id) => {
    if (activeEvidence.includes(id)) {
      // 如果已經選了，就取消選取
      setActiveEvidence(activeEvidence.filter(evId => evId !== id));
    } else {
      // 如果還沒選，就加入清單
      setActiveEvidence([...activeEvidence, id]);
    }
  };

  // 根據選中的證據，過濾鬼魂名單
  const filteredGhosts = ghostsData.filter(ghost => {
    // 如果沒有選任何證據，顯示全部
    if (activeEvidence.length === 0) return true;
    
    // 檢查該鬼魂是否包含「所有」被選中的證據
    return activeEvidence.every(ev => ghost.evidence.includes(ev));
  });

  return (
    <div className="container">
      <Header activePage='Ghosts'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">鬼魂<udt>Update: 7月31日</udt></h1>
        </div>

        {/* 證據篩選工具面板 */}
        <section className="tool-panel">
          <div className="panel-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>證據篩選</div>
          <div className="evidence-grid">
            {evidences.map((ev) => (
              <div 
                key={ev.id}
                // 如果這個證據在 activeEvidence 陣列裡，就加上 active class
                className={`ev-btn ${activeEvidence.includes(ev.id) ? 'active' : ''}`}
                onClick={() => toggleEvidence(ev.id)}
              >
                {ev.icon}
                {ev.name}
              </div>
            ))}
          </div>
        </section>

        {/* 鬼魂結果顯示區 */}
        <div className="results-area">
          {filteredGhosts.length > 0 ? (
            filteredGhosts.map(ghost => (
              <GhostCard key={ghost.id} ghost={ghost} />
            ))
          ) : (
            <p style={{ color: 'var(--text-tertiary)' }}>找不到符合這些證據的鬼魂...</p>
          )}
        </div>
      </main>
    </div>
  );
}