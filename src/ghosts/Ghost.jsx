import { useParams, Link } from 'react-router-dom';
import Header from '../Header';
import '../App.css'
import './Ghost.css'

import { ghostsData } from '../data';

import Template from './content/Template';

import Aswang from './content/Aswang';
import Banshee from './content/Banshee';
import Dayan from './content/Dayan';
import Deildegast from './content/Deildegast';
import Demon from './content/Demon';
import Deogen from './content/Deogen';
import Gallu from './content/Gallu';
import Goryo from './content/Goryo';
import Hantu from './content/Hantu';
import Jinn from './content/Jinn';
import Kormos from './content/Kormos';
import Mare from './content/Mare';
import Moroi from './content/Moroi';
import Myling from './content/Myling';
import Obake from './content/Obake';
import Obambo from './content/Obambo';
import Oni from './content/Oni';
import Onryo from './content/Onryo';
import Phantom from './content/Phantom';
import Poltergeist from './content/Poltergeist';
import Raiju from './content/Raiju';
import Revenant from './content/Revenant';
import Shade from './content/Shade';
import Spirit from './content/Spirit';
import Thaye from './content/Thaye';
import TheMimic from './content/TheMimic';
import TheTwins from './content/TheTwins';
import Wraith from './content/Wraith';
import Yokai from './content/Yokai';
import Yurei from './content/Yurei';

const ghostComponents = {
  template: Template,

  aswang: Aswang,
  banshee: Banshee,
  dayan: Dayan,
  deildegast: Deildegast,
  demon: Demon,
  deogen: Deogen,
  gallu: Gallu,
  goryo: Goryo,
  hantu: Hantu,
  jinn: Jinn,
  kormos: Kormos,
  mare: Mare,
  moroi: Moroi,
  myling: Myling,
  obake: Obake,
  obambo: Obambo,
  oni: Oni,
  onryo: Onryo,
  phantom: Phantom,
  poltergeist: Poltergeist,
  raiju: Raiju,
  revenant: Revenant,
  shade: Shade,
  spirit: Spirit,
  thaye: Thaye,
  themimic: TheMimic,
  thetwins: TheTwins,
  wraith: Wraith,
  yokai: Yokai,
  yurei: Yurei
};

export default function Ghost() {
  const { ghostId } = useParams();

  const Data = ghostsData.find((ghost) => ghost.id === ghostId); 
  const CustomContent = ghostComponents[ghostId];

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
            {Data.evidenceNames.map((ev, index) => (<span key={index} className="section-tag">{ev}</span>))}
            <dt>Update: 2026.08.01</dt>
          </h1>
        </div>
        <div className='desc-area'>
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
        {CustomContent ( <CustomContent /> )}
      </main>
    </div>
  );
}