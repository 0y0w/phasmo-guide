import '../../App.css'
import '../Ghost.css'

export default function wraith() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>無特色。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>魅影在任何情況都不會踩鹽。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>非獵殺期間，可以直接傳送到玩家旁邊，並留下 EMF 2級。</div>
          <br/>
          <div className='desc-content'>※ <hl>跟人鬼，女妖、幻影、魅影。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>通過獵殺或是運動感測器發現，鬼魂經過鹽卻沒有踩到。</div>
          <div>移動到離鬼房很遠的玩家身旁。（幻影、魅影也可能出現此現象）</div>
          <div>沒有任何活動卻出現 EMF 2級。（幻影也可能出現此現象）</div>
        </div>
      </div>
    </div>
  );
}
