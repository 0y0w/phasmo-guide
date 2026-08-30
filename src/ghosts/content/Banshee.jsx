import '../../App.css'
import '../Ghost.css'

import SoundPlayer from '../../audioPlayer';

export default function banshee() {

  return (
    <div className='desc-area'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>遊戲開始時，女妖會隨機選定一名玩家作為獵殺目標。若目標玩家死亡或離開遊戲，則按玩家加入大廳的順序選擇下一位存活者。</div>
        <div className='desc-content'>女妖僅檢測目標玩家的理智，而非平均理智。獵殺時，女妖只會追蹤目標玩家，即使穿過非目標玩家也不會照程擊殺。</div>
        <div className='desc-content'>若目標處於調查區外，女妖仍以其理智值決定是否獵殺。但會追擊任何可觸及的玩家。</div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>女妖在執行遊蕩時，若其獵殺目標位於調查區域內，有 2/3 機率遊蕩至目標所在位置，且不會產生EMF讀數。若女妖與目標處於不同樓層則能力失效，單室樓層除外。</div>
        <div className='desc-content'>女妖在發出靈異聲響時，有1/3機率發出獨特尖嘯。</div>
      </div>
      <div>
        <div className='desc-title'>鬼魂事件</div>
        <div className='desc-content'>女妖更容易觸發唱歌類鬼魂事件，且會減少 15% 理智而非一般鬼的 10%。女妖可以對所有玩家執行鬼魂事件。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>觀察獵殺時鬼魂是否可以追蹤不同人。</div>
        <div className='desc-content'>使用錄音機或收音器，聽取特殊尖嘯。</div>
        <div className='desc-content'>某位玩家附近經常出現鬼魂活動（幻影、魅影也可能出現此現象）。</div>
        <div className='desc-content'>為女性鬼魂，若出現男性名字、男性模型，且在錄音機、鬼魂事件、獵殺過程中發出男性聲音，則可以排除。</div>
      </div>
      <div>
        <div className='desc-title'>特殊尖嘯</div>
        <div className='idty-grid'>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_1.ogg`} />Banshee_Scream_1</div>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_8.ogg`} />Banshee_Scream_8</div>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_10.ogg`} />Banshee_Scream_10</div>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_14.ogg`} />Banshee_Scream_14</div>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_16.ogg`} />Banshee_Scream_16</div>
          <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/Banshee_Scream_17.ogg`} />Banshee_Scream_17</div>
        </div>
      </div>
    </div>
  );
}
