
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';

export default function Tutorial() {
  return (
    <div className="container">
      <Header activePage='Tutorial'/>

      <main className="main-content">
        <div className="section-header">
          <h1 className="section-title">新手教學</h1>
        </div>
        <div className='desc-area'>
          <div className='desc-block'>
            <div className='desc-title'>尋找鬼房</div>
            <div className='desc-content'>
              <div>鬼魂通常會在鬼房附近遊蕩，所以在尋找證據之前，先找到鬼房能節省大量的時間。在專家級以上難度，鬼魂偶爾會更換鬼房，一般只會換到原鬼房附近的房間。</div>
              <br />
              <div>在小圖中，直接測量<span onClick={()=>scrollTo('temp')} className='link'>溫度</span>是最快的方法。先開啟電閘，再從調查區域深處的房間往回量測溫度尋找鬼房，測得溫度兩到三次都在下降的房間大概率為鬼房。過程中若聽到鬼魂互動的聲音，也可先前往附近測量。</div>
              <br />
              <div>如果地圖較大，可以先利用收音器或EMF讀取儀，尋找鬼魂互動的位置以縮小範圍，再通過溫度計測量或是觀察玩家是否吐寒氣來確定鬼房。</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>證據定鬼</div>
            <div className='desc-content'>
              <div>識別鬼魂的標準方法是收集證據。遊戲一共有以下 7 個證據，每種鬼魂有其中 3 個證據，在難度較低的模式中（業餘、中等、專家），只要找到這 3 個證據就能確定是哪種鬼魂。</div>
              <br />
              <h2><Link to="/items/EMFReader" className='link'>EMF 5級</Link></h2>
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
              <div>當鬼魂進入筆記範圍時，有機會在筆記上寫字。若鬼魂將筆記關閉並扔出，則鬼魂沒有此證據。</div>
              <br />
              <Link to="/items/spiritBox" className='link'>通靈盒</Link>
              <div>在使用通靈盒提問前，確保房間裡的燈全部關閉。如果鬼魂只回應單人，那麼只能有提問者留在房間裡。此外，鬼魂必須在通靈盒的範圍內才會回應，因此在鬼魂房間內詢問較容易得到回應。</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>完美調查</div>
            <div className='desc-content'>
              <div>完美調查有 4 個條件，正確定鬼、撿起骨頭、完成所有 13 個媒體且皆為獨特、完成 3 個任務。如此能獲的額外的完美調查加成 $50。</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>媒體</div>
            <div className='desc-content'>
              <div>一場遊戲最多可以蒐集 13 個媒體，包含 5 張照片、5 段影片、3 段聲音，根據其中內容可以獲得更多金錢。</div>
              <div>使用 2級、3級的設備錄製時，每塊媒體會額外獲得 $1、$2 獎勵。</div>
              <div>重複的媒體只能獲得 $0 ~ $5 獎勵。</div>
              <br/>
              <div>照片</div>
              <div>$15：鬼、影子幽靈、半透明幽靈、霧狀形態</div>
              <div>$10：點症鬼影、鬼魂筆記、刺骨寒溫、EMF 5級、幻妖指紋、燒焦的十字架</div>
              <div>$5 ：骨頭、屍體、髒水、EMF 讀數、指紋、腳印、互動、鬧鬼魔鏡、猴爪、八音盒、通靈板、招喚陣、塔羅牌、巫毒娃娃</div>
              <br/>
              <div>影片</div>
              <div>$20：幽靈變形（幻妖）、正在獵殺的鬼魂</div>
              <div>$15：鬼、影子幽靈、半透明幽靈、霧狀形態</div>
              <div>$10：D.O.T.S. 幽靈、燒焦的十字架、燈泡爆炸、燈光閃爍、鬼魂筆記、靈球、踩過的鹽</div>
              <div>$5 ：陽光牧場精神病院十字架、屍體、門被移動、熄滅火焰、火焰互動、互動、開關燈、檢測到運動、物體被扔、失真音樂、搖椅、通靈板、配電箱</div>
              <br/>
              <div>聲音</div>
              <div>$20：正在獵殺的鬼魂</div>
              <div>$15：鬼、影子幽靈、鬼魂事件、霧狀形態</div>
              <div>$10：女妖尖嘯、霧影呼吸、燒焦的十字架、EMF 5級、鬼魂筆記、通靈盒回應</div>
              <div>$5 ：熄滅火焰、超自然笑聲、超自然呻吟、超自然說話、超自然低語、附身玩具、失真的音樂、八音盒、通靈板</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>任務</div>
            <div className='desc-content'>
              <div>每個任務可以獲得 $5。</div>
              <br/>
              <div>在獵殺時點燃薰香驅散鬼魂、團隊成員之一成功逃脫獵殺</div>
              <div>捕獲鬼魂照片、捕獲鬼魂影片、團隊成員之一見證靈異事件、用十字架阻止鬼魂獵殺、用收音器檢測超自然聲音、平均理智低於 25%</div>
              <div>用 EMF 讀取儀檢測超自然活動、用運動感測器檢測鬼魂活動、用收音器檢測超自然聲音、在鬼附近的區域使用薰香、讓鬼魂吹滅火光</div>
              <br/>
              <div>獵殺任務</div>
              <div>在被鬼魂看到後，使用薰香再躲進躲藏點。需注意逃脫獵殺任務不能有任何玩家死亡。</div>
              <br/>
              <div>靈異事件</div>
              <div>靈異事件僅包含現身及哈氣，不包含獵殺、互動、投擲物品。</div>
              <br/>
              <div>超自然聲音</div>
              <div>超自然聲音只能在使用收音器或錄音機時聽到。鬼魂最低 80 秒能發出一次超自然聲音，鬼嬰為 65 秒。</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>獵殺應對</div>
            <div className='desc-content'>
              <div></div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>溫度</div>
            <div className='desc-content'>
              <div>地圖的溫度受天氣影響，每種天氣類型有固定的環境溫度。解鎖調查區大門前，若電閘初始設定為開啟（業餘或自訂）室內溫度為 20°C，其餘皆為環境溫度。</div>
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
              <br/>
              <div>3 個等級的溫度計皆有誤差，但只有向上的誤差，沒有向下的誤差。</div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>鬼魂活動</div>
            <div className='desc-content'>
              <div></div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>鬼魂遊蕩</div>
            <div className='desc-content'>
              <div></div>
            </div>
          </div>
          <div className='desc-block'>
            <div className='desc-title'>零證據難度（11.25倍）</div>
            <div className='desc-content'>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}