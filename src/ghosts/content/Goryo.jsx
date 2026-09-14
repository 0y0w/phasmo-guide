import '../../App.css'
import '../Ghost.css'

export default function goryo() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>非獵殺期間，御靈通常無法遊蕩至遠處，只會在鬼房附近。</div>
        <br />
        <div className='desc-content'>御靈的永遠不會更換鬼房，除了猴爪「保持清醒」願望的強制更換鬼房。</div>
        <br />
        <div className='desc-content'>在缺少證據的難度下，<hl>點陣</hl> 證據不會被影藏。</div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>御靈只會在同一個房間 <hl>沒有</hl> 任何玩家時，從 <hl>攝影機</hl> 中看到。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>僅從攝影機中看到點陣，肉眼看不到。</div>
        <div className='desc-content'>幾乎沒有離開鬼房。</div>
      </div>
    </div>
  );
}
