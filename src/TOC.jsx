import { useEffect, useRef, useState } from 'react';
import './TOC.css';

const TITLE_SELECTOR = '.main-content h1, .main-content h2, .main-content .section-title, .main-content .ghost-inline-title, .main-content .desc-title, .main-content .map-title, .main-content .item-title, .main-content .panel-title';

export default function TOC() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const lastKey = useRef('');

  useEffect(() => {
    const collect = () => {
      const nodes = Array.from(document.querySelectorAll(TITLE_SELECTOR));
      const list = nodes
        .filter(el => el.textContent && el.textContent.trim())
        // 若頁面為鬼魂列表（有 ghost-inline 標題），右側目錄僅保留鬼魂名稱（不含證據 chips）
        .filter(el => {
          const hasInline = document.querySelector('.main-content .ghost-inline-title');
          return !hasInline || el.classList.contains('ghost-inline-title');
        })
        .map((el, i) => {
          const isInlineTitle = el.classList.contains('ghost-inline-title');
          // ghost-inline-title 內含證據 chips，只取第一個文字節點（鬼魂名稱）
          const text = isInlineTitle
            ? (Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim())?.textContent.trim() || '')
            : el.textContent.trim();
          if (!el.id) el.id = `toc-${i}-${text.slice(0, 12)}`;
          return { id: el.id, text, tag: el.tagName.toLowerCase() };
        });
      // 僅在實際內容有變時才 setState，避免 MutationObserver 造成無限 re-render
      const key = JSON.stringify(list);
      if (key !== lastKey.current) {
        lastKey.current = key;
        setItems(list);
      }
    };

    collect();
    const observer = new MutationObserver(collect);
    observer.observe(document.body, { childList: true, subtree: true });

    const onScroll = () => {
      let current = '';
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="toc" aria-label="快速跳轉">
      <div className="toc-title">本頁目錄</div>
      <ul className="toc-list">
        {items.map(item => (
          <li key={item.id} className={`toc-item ${item.tag === 'h1' || item.tag === 'h2' ? 'toc-lv1' : 'toc-lv2'} ${activeId === item.id ? 'active' : ''}`}>
            <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
