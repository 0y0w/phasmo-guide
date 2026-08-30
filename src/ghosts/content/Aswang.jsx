import '../../App.css'
import '../Ghost.css'

export default function aswang() {

  return (
    <div className='desc-area'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>阿斯旺的初始速度為 1.53。</div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>如果阿斯旺抓到位於正確使用官方躲藏點（如壁櫥或儲物櫃）的玩家，獵殺將立即結束，且玩家不會被殺死。然而，如果阿斯旺以此方式結束獵殺，那麼在下一次獵殺開始時，鬼魂會直接在玩家所在位置設置一個路徑點並向其移動。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>沒有明顯的特徵，只能通過腳步（速度）判斷，但阿斯旺的速度 1.53 與常速 1.7 接近。</div>
      </div>
    </div>
  );
}
