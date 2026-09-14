
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';

export default function Tutorial() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return (
    <div className="container">
      <Header activePage='Tutorial'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">新手教學<dt>Update: 2026.08.06</dt></h1>
        </div>
        <div className='desc-area'>
          <div className='desc-block'>
            <div className='desc-title'>目錄</div>
            <div className='link'>
              <div className='catalog'>
                <span onClick={()=>scrollTo('findRoom')}>尋找鬼房</span>
                <span onClick={()=>scrollTo('confirmGhost')}>證據定鬼</span>
                <span onClick={()=>scrollTo('temp')}>溫度</span>
              </div>
            </div>
          </div>
          <div className='desc-block' id='findRoom'>
            <div className='desc-title'>尋找鬼房</div>
            <div className='desc-content'>
              <div>鬼魂通常會在鬼房附近遊蕩，所以在尋找證據之前，先找到鬼房能節省大量的時間。在專家級以上難度，鬼魂偶爾會更換鬼房，一般只會換到原鬼房附近的房間。</div>
              <br />
              <div>在小圖中，直接測量<span onClick={()=>scrollTo('temp')} className='link'>溫度</span>是最快的方法。先開啟電閘，再從調查區域深處的房間往回量測溫度尋找鬼房，測得溫度兩到三次都在下降的房間即為鬼房。過程中若聽到鬼魂互動的聲音，也可先前往附近測量。</div>
              <br />
              <div>如果地圖較大，可以先利用收音器或EMF讀取儀，尋找鬼魂互動的位置以縮小範圍，再通過溫度計測量或是觀察玩家是否吐寒氣來確定鬼房。</div>
            </div>
          </div>
          <div className='desc-block' id='confirmGhost'>
            <div className='desc-title'>證據定鬼</div>
            <div className='desc-content'>
              <div>識別鬼魂的標準方法是收集證據。遊戲一共有以下 7 個證據，每種鬼魂有其中 3 個證據，在難度較低的模式中（業餘、中等、專家），只要找到這 3 個證據就能確定是哪種鬼魂。</div>
              <br />
              <Link to="/items/EMFReader" className='link'>EMF 5級</Link>
              <div>當鬼魂與物體互動時，此處的EMF 2 級或者 3 級讀數有 25% 的概率會變為EMF 5 級。請注意，獵殺或者鬼魂事件中的被干擾EMF儀器讀數不能作為EMF 5 級證據的判斷標準，但如果鬼魂在獵殺時移動了物品並且已經遠離了EMF讀取儀，那麼可以獲得EMF 5 級證據。</div>
              <br />
              <Link to="/items/dotsProjector" className='link'>點陣</Link>
              <div>當鬼魂進入點陣投影儀範圍時，有機會被點陣照出鬼魂的輪廓。御靈的點陣只能經由攝影機，在無人的房間中看到。</div>
              <br />
              <Link to="/items/UVLight" className='link'>紫外線</Link>
              <div>當鬼魂踩鹽或與門、燈開關或者窗戶互動時，使用紫外線燈光照射物品檢查是否有指紋來確認是否有紫外線證據。每個指紋只會持續 2 分鐘（瘋狂難度下只有 1 分鐘）然後消失。</div>
              <br />
              <Link to="/items/thermometer" className='link'>刺骨寒溫</Link>
              <div>刺骨寒溫可以通過用溫度計讀取到低於 0℃ 或者 32℉ 的溫度來確認，一般會出現在鬼房。玩家的呼出的寒氣不能用來判斷刺骨寒溫。</div>
              <br />
              <Link to="/items/videoCamera" className='link'>靈球</Link>
              <div>靈球可以通過攝像機夜視看見。它看起來像一個緩慢移動的白點，並且可能會逐漸變暗消失，又逐漸變亮出現。靈球會始終在同一個房間裡移動，除非在鬼魂變更了鬼魂房間。在雪天觀察靈球時需要小心，雪不會向上飄，但靈球可能往任意方向移動。</div>
              <br />
              <Link to="/items/book" className='link'>鬼魂筆跡</Link>
              <div>當鬼魂進入筆記範圍時，有機會在筆記上寫字。若鬼魂將筆記扔出，則鬼魂沒有此證據。</div>
              <br />
              <Link to="/items/spiritBox" className='link'>通靈盒</Link>
              <div>在使用通靈盒提問前，確保房間裡的燈全部關閉。如果鬼魂只回應單人，那麼只能有提問者留在房間裡。此外，鬼魂必須在通靈盒的範圍內才會回應，因此在鬼魂房間內詢問較容易得到回應。</div>
            </div>
          </div>
          <div className='desc-block' id='temp'>
            <div className='desc-title'>溫度</div>
            <div className='desc-content'>
              <div>地圖的溫度受天氣影響，每種天氣類型有固定的環境溫度。解鎖調查區大門前，若電閘初始設定為開啟（業餘或自訂）室內溫度為 20°C，其他難度皆為環境溫度。</div>
              <table className='desc-table' style={{'--cols': 5}}>
                <tbody>
                  <tr><th>天氣</th><td>日出</td><td>晴天、大霧、血月</td><td>小雨、暴雨、刮風</td><td>下雪</td></tr>
                  <tr><th>溫度</th><td>16°C</td><td>13°C</td><td>8°C</td><td>5°C</td></tr>
                </tbody>
              </table>
              <br />
              <div>解鎖調查區大門後，房間的溫度才會開始變化，以 0.1°C/s 下降或以 0.025°C/s 上升至目標溫度，溫度往低於環境溫度變化時會以三分之一的速度下降。電閘未開啟時，所有房間的目標溫度為環境溫度。如果電閘打開，室內房間的目標溫度會升到 20°C。室外溫度不受電閘開關的影響，包括營地地圖室外的帳篷和廁所。</div>
              <br />
              <div>無論電閘開關，鬼魂所在的房間也會漸漸降溫，鬼魂離開會漸漸升溫。</div>
              <br />
              <div>點燃小營地的營火可讓房間溫度上升到 20°C。營火本體通常會超過 500°C。大營地的營火不會觸發這樣的效果。</div>
              <br />
              <div>房間溫度低於 5°C 時，玩家會呼出寒氣。</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}