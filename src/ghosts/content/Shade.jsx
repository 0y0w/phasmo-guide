import '../../App.css'
import '../Ghost.css'

export default function shade() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>與玩家在同個房間時，無法開啟獵殺。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>平均理智高時，暗影進行鬼魂事件的機率較低，直到理智 50% 後回到正常機率。</div>
          <br />
          <div>鬼魂事件偏向煙霧球、黑影，而非實體現型。</div>
          <br />
          <div>不會觸發唱歌鬼魂事件。</div>
          <br />
          <div>召喚陣、八音盒現身時，有機率以黑影型態出現。</div>
          <br />
          <div>與玩家在同個房間時，無法觸發任何互動、事件、獵殺，<hl>包含寫筆記本</hl>。（仍能踩鹽、被運動感測器檢測）</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>玩家待在鬼房時，鬼魂變得非常安靜，不互動也不獵殺。</div>
        </div>
      </div>
    </div>
  );
}
