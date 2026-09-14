import '../App.css'
import './WWM.css';

import { useState, useEffect } from 'react';

  const D1096 = () => (
    <div>
      
    </div>
  );

  const D0596 = () => (
    <div>
      
    </div>
  );

  const Hong = () => (
    <div>
      
    </div>
  );

  const pages = [
    { id: 'd1096', label: 'Lv.96 笑度苦行舟', tag: '10', content: <D1096 /> },
    { id: 'd0596', label: 'Lv.96 白駒飛俠', tag: '5', content: <D0596 /> },
    { id: 'hong', label: '鳴金 虹', tag: 'g', content: <Hong /> },
  ];

export default function Wwm() {
  useEffect(() => {
    const originalBg = document.body.style.backgroundColor;

    document.body.style.backgroundColor = '#1c1e26';

    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  const [activePageId, setActivePageId] = useState(null);

  const currentPage = pages.find((p) => p.id === activePageId);

  return (
    <div className='wwm-block'>
      {activePageId !== null && (
        <div style={{ marginBottom: '16px' }}>
          <div onClick={() => setActivePageId(null)} className='link'>← 返回首頁</div>
        </div>
      )}
      <main>
        {activePageId === null ? (
          <div>
            <div className='wwm-title'>俠境</div>
            <div className='wwm-text'>
              {pages.filter(p => p.tag==='10').map((page) => (
                <span key={page.id} onClick={() => setActivePageId(page.id)} className='wwm-link'>{page.label}</span>
              ))}
            </div>
            <div className='wwm-title'>試劍</div>
            <div className='wwm-text'>
              {pages.filter(p => p.tag==='5').map((page) => (
                <span key={page.id} onClick={() => setActivePageId(page.id)} className='wwm-link'>{page.label}</span>
              ))}
            </div>
            <div className='wwm-title'>流派攻略</div>
            <div className='wwm-text'>
              {pages.filter(p => p.tag==='g').map((page) => (
                <span key={page.id} onClick={() => setActivePageId(page.id)} className='wwm-link'>{page.label}</span>
              ))}
            </div>
          </div>
          
        ) : (
          <div>
            {currentPage?.content}
          </div>
        )}
      </main>
    </div>
  );
}