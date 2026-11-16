import '../../App.css'
import '../Ghost.css'

export default function yokai() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>電器及對講機的檢測距離僅有 2.5 米，而非一般的電器 7.5 米、對講機 9 米。</div>
          <br/>
          <div>若有玩家在妖怪附近說話，獵殺閾值提升至 80%。</div>
          <br/>
          <div>※ <hl>妖怪的視力是正常的。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>使用八音盒時，妖怪在 2.5 米內才會現身。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>獵殺時使用對講機無法將妖怪吸過來。</div>
          <div>※ <hl>電器干擾距離為 10 米。</hl></div>
        </div>
      </div>
    </div>
  );
}
