import '../../App.css'
import '../Ghost.css'

export default function jinn() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺期間，若符合以下 3 個條件， <hl>電閘開啟</hl> 且巨靈 <hl>看到</hl> 玩家並相距 <hl>3 米以外</hl> ，獵殺移速 <hl>固定</hl> 為 2.5。否則同一般鬼魂相同，速度 1.7 且具視野加速。</div>
          <br />
          <div>※ <hl>速度固定期間視野加速仍在累計。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>巨靈無法關閉電閘。</div>
          <br />
          <div>電閘開啟時，巨靈能發動能力使附近一名玩家理智降低 25%，並同時在電閘處留下 EMF 2級。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>在未開關電閘、互動電閘門的情況下，在電閘處檢測到 EMF 2級或 EMF 5級。</div>
          <div>在電閘開啟時，巨靈看到並朝你追來時速度較快，待到近處後恢復正常速度。（盲靈也可以觸發類似現象）</div>
          <div>若鬼魂關閉電閘，則可以排除巨靈。</div>
          <br />
          <div>※ <hl>許多鬼魂都能使理智突然降低，較難從理智降低判斷巨靈。</hl></div>
        </div>
      </div>
    </div>
  );
}
