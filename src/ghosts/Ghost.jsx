import { useParams, Link } from 'react-router-dom';
import Header from '../Header';
import '../App.css'
import './Ghost.css'

import { ghostsData } from '../data';
import { EvTag } from '../Card';

import { ghostContentMap } from './content';

export default function Ghost() {
  const { ghostId } = useParams();

  const Data = ghostsData.find((ghost) => ghost.id === ghostId);
  const CustomContent = ghostContentMap[ghostId];

  if (!Data) {
    return (
      <div className="container">
        <Header activePage='Ghosts'/>
        <main className="main-content" style={{ textAlign: 'center', padding: '50px' }}>
          <h1>不要再亂打了!</h1>
          <p>系統中不存在名為「{ghostId}」的鬼魂。</p>
          <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
            點此返回首頁
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Header activePage='Ghosts'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">
            {Data.name}
            {Data.evidenceNames.map((ev, index) => (<EvTag key={index} name={ev} />))}
          </h1>
        </div>
        <div className='desc-area'>
          <div className='desc-block'>
            <div>
              <h2 className='desc-title'>基本資料</h2>
              <div className='idty-grid'>
                <div className='idty-content'>性別：{Data.gender}</div>
                <div className='idty-content'><Link to="/ghostSpeed" className='link'>基礎移度</Link>：{Data.basicSpeed.filter(s => s!=="").join(" | ")} m/s</div>
                <div className='idty-content'><Link to="/ghostThreshold" className='link'>獵殺閾值</Link>：{Data.threshold.filter(p => p!=="" && p!=="*").join(" | ")} %{Data.evidence.includes("eh") && <span className='idty-content-tag'>早獵</span>}</div>
                <div className='idty-content'>視野加速：{Data.acc}</div>
                <br />
              </div>
              <div className='idty-desc'>{Data.desc}</div>
            </div>
          </div>
          {CustomContent && <CustomContent />}
        </div>
      </main>
    </div>
  );
}
