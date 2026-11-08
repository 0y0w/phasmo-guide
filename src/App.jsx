import { useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { ghostsData } from './data';
import { EvTag } from './Card';
import { ghostContentMap } from './ghosts/content';
import './ghosts/Inline.css';

export default function App() {
  // hash 跳轉處理：頁面渲染完成後滾動到對應鬼魂區塊（如 /#aswang）
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    // 稍等渲染完成再滾動
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Header activePage='Ghosts'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">鬼魂</h1>
        </div>

        {/* 所有鬼魂依序直接展開，內容(jsx)原封不動內嵌，點擊仍可跳詳細頁 */}
        {ghostsData.map(ghost => {
          const CustomContent = ghostContentMap[ghost.id];
          return (
            <section key={ghost.id} className="ghost-inline" id={ghost.id}>
              <h2 className="ghost-inline-title">
                {ghost.name}
                {ghost.evidenceNames.map((ev, i) => (<EvTag key={i} name={ev} />))}
              </h2>
              <div className="desc-block">
                <div>
                  <h2 className="desc-title">基本資料</h2>
                  <div className="idty-grid">
                    <div className="idty-content">性別：{ghost.gender}</div>
                    <div className="idty-content"><Link to="/ghostSpeed" className="link">基礎移度</Link>：{ghost.basicSpeed.filter(s => s !== "").join(" | ")} m/s</div>
                    <div className="idty-content"><Link to="/ghostThreshold" className="link">獵殺閾值</Link>：{ghost.threshold.filter(p => p !== "" && p !== "*").join(" | ")} %{ghost.evidence.includes("eh") && <span className="idty-content-tag">早獵</span>}</div>
                    <div className="idty-content">視野加速：{ghost.acc}</div>
                    <br />
                  </div>
                </div>
              </div>
              {CustomContent && <CustomContent />}
            </section>
          );
        })}
      </main>
    </div>
  );
}
