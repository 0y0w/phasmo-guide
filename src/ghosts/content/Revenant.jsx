import '../../App.css'
import '../Ghost.css'

export default function revenant() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>亡魂在未發現玩家時，速度僅為 1.0，一旦發現玩家便會加速至 3.0。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>鬼魂沒檢測到玩家時很慢，一旦發現玩家立即變得非常快。</div>
        </div>
      </div>
    </div>
  );
}
