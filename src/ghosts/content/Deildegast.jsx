import '../../App.css'
import '../Ghost.css'

export default function deildegast() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>擾物靈的移動速度是固定的，取決於從上一次獵定結束到本次獵殺開始期間，玩家（包括死亡玩家）投擲的獨特道具數量。初始速度為 3.0，每扔一個物體速度降低 0.1，最低可降至 0.4。<hl>獵殺結束</hl> 和 <hl>十字架燃燒</hl> 都會重置它的速度。</div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>擾物靈與門和開關的互動概率只有 10%，而普通鬼魂有 25%。與道具互動時，成功率僅有 85%，而普通鬼魂是100%。如果互動失敗，界靈將前往鬼房。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>初始速度 3.0 是最快的鬼，與有視野亡魂相同。</div>
        <div className='desc-content'>在獵殺前與多個獨特物品互動，互動 26 個物品後達到最低速度 0.4。與霧影在近距離時相同。</div>
      </div>
    </div>
  );
}
