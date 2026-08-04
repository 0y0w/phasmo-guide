import { useState } from 'react';
import './App.css';
import Header from './Header';
import { GhostCard } from './Card';
import { evidences, ghostsData } from './data';

export default function App() {
  // 記錄目前被選中的證據 ID（例如: ['emf', 'box']）
  const [activeEvidence, setActiveEvidence] = useState([]);
  const [rejectedEvidence, setRejectedEvidence] = useState([]);

  // 點擊證據按鈕的處理函數
  const toggleEvidence = (id) => {
    if (activeEvidence.includes(id)) {
      // 若目前為「包含」，切換為「排除」
      setActiveEvidence(activeEvidence.filter(evId => evId !== id));
      setRejectedEvidence([...rejectedEvidence, id]);
    } else if (rejectedEvidence.includes(id)) {
      // 若目前為「排除」，切換回「未選」
      setRejectedEvidence(rejectedEvidence.filter(evId => evId !== id));
    } else {
      // 若目前為「未選」，切換為「包含」
      setActiveEvidence([...activeEvidence, id]);
    }
  };
  const handleRightClick = (e, id) => {
    e.preventDefault(); // 阻止瀏覽器預設的右鍵選單
    
    setRejectedEvidence(rejectedEvidence.filter(evId => evId !== id));
    setActiveEvidence(activeEvidence.filter(evId => evId !== id));
  };

  // 根據選中的證據，過濾鬼魂名單
  const filteredGhosts = ghostsData.filter(ghost => {
    // 條件 1：必須擁有「所有」被 active 的證據
    const hasAllActive = activeEvidence.every(ev => ghost.evidence.includes(ev));
    
    // 條件 2：不能擁有「任何」被 rejected 的證據
    const hasNoRejected = rejectedEvidence.every(ev => !ghost.evidence.includes(ev));
    
    return hasAllActive && hasNoRejected;
  });

  return (
    <div className="container">
      <Header activePage='Ghosts'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">鬼魂<dt>Update: 2026.07.31</dt></h1>
        </div>

        {/* 證據篩選工具面板 */}
        <section className="tool-panel">
          <div className="panel-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>證據篩選</div>
          <div className="evidence-grid">
            {evidences.map((ev) => {
              // 判斷當前按鈕狀態，給予對應的 class
              let btnClass = 'ev-btn';
              if (activeEvidence.includes(ev.id)) btnClass += ' active';
              if (rejectedEvidence.includes(ev.id)) btnClass += ' rejected';

              return (
                <div 
                  key={ev.id}
                  className={btnClass}
                  onClick={() => toggleEvidence(ev.id)}
                  onContextMenu={(e) => handleRightClick(e, ev.id)} // 綁定右鍵事件
                >
                  {ev.icon}
                  {ev.name}
                </div>
              );
            })}
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