import '../../App.css'
import '../Ghost.css'

export default function phantom() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺時幻影的閃爍較慢，隱形的時間很長，幾乎看不到他。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>幻影在所有時候被拍攝時（包括獵殺、點陣）模型會立即消失，照片中看不到鬼且不會被干擾，但還是會標記為鬼。</div>
          <br />
          <div>在鬼魂事件中拍攝時，幻影的模型會立即消失，玩家不會聽到心跳聲，電子設備也會停止干擾效果，但事件音效仍會繼續播放。</div>
          <br />
          <div>在 10 米內注視幻影時，每秒降低 0.5% 理智。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>偶爾使用能力移動到玩家附近，並留下 EMF 2級。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>現身時對鬼魂拍照或錄影，鬼魂消失但現身音效仍在播放。</div>
          <div>手冊中的鬼照清晰且看不見鬼魂，但仍被標為鬼魂照片。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>獵殺閃爍</div>
        <div className='desc-content'>
          <div>待新增...</div>
        </div>
      </div>
    </div>
  );
}
