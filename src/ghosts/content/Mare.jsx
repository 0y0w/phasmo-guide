import '../../App.css'
import '../Ghost.css'

export default function mare() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>如果 <hl>燈光關閉</hl> 或是 <hl>燈泡破裂</hl>，獵殺閾值提高到 60%。如果 <hl>燈光打開</hl>，獵殺閾值降低到 40%。此規則不受電閘開關影響。</div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>夢魘永遠不會開燈、開電腦、開電視（儘管更新日誌說明夢魘可以）。</div>
          <br />
          <div>當房間的燈處於打開狀態時，夢魘有更高的可能進行長遊蕩。</div>
          <br />
          <div>夢魘有更高的概率觸發燈泡爆裂事件。</div>
          <br />
          <div>夢魘進行鬼魂事件時，夢魘更有可能選擇燈泡被破壞的房間。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>俗稱秒關燈，玩家在距離夢魘 4 米之類開啟電燈，且前 10 秒內該玩家沒有動過該電燈，電燈有概率馬上被關閉。破碎的燈泡不會觸發此能力，電閘關閉或損壞仍可觸發。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>多次觸發夢魘能力。（所有鬼魂都有低機率出現此現象）</div>
          <div>鬼魂所在房間未開燈時早獵。</div>
          <div>若鬼魂開啟電燈，則可以排除夢魘。</div>
        </div>
      </div>
    </div>
  );
}
