import { useParams } from 'react-router-dom';
import Header from '../Header';
import '../App.css'

import { ghostsData } from '../data';

// 引入各鬼魂的客製化排版
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

// 建立對照表 (Registry)
const ghostComponents = {
  Template: Template,

  Aswang: Aswang,
  Banshee: Banshee,
  Dayan: Dayan,
  Deildegast: Deildegast,
  Demon: Demon,
  Deogen: Deogen,
  Gallu: Gallu,
  Goryo: Goryo,
  Hantu: Hantu,
  Jinn: Jinn,
  Kormos: Kormos,
  Mare: Mare,
  Moroi: Moroi,
  Myling: Myling,
  Obake: Obake,
  Obambo: Obambo,
  Oni: Oni,
  Onryo: Onryo,
  Phantom: Phantom,
  Poltergeist: Poltergeist,
  Raiju: Raiju,
  Revenant: Revenant,
  Shade: Shade,
  Spirit: Spirit,
  Thaye: Thaye,
  TheMimic: TheMimic,
  TheTwins: TheTwins,
  Wraith: Wraith,
  Yokai: Yokai,
  Yurei: Yurei
  // 未來有新排版的鬼，在這裡補上一行即可
};

export default function Ghost() {
  const { ghostId } = useParams();

  // 1. 取得該鬼魂對應的專屬組件
  const Data = ghostsData.find((ghost) => ghost.id === ghostId); 
  const CustomContent = ghostComponents[ghostId];

  return (
    <div className="container">
      <Header activePage='Ghosts'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">
            {Data.name}
            {Data.evidenceNames.map((ev, index) => (<span key={index} className="section-tag">{ev}</span>))}
            <udt>Update: 8月1日</udt>
          </h1>
        </div>
        {CustomContent ( <CustomContent /> )}
      </main>
    </div>
  );
}