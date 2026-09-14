import '../../App.css'
import '../Ghost.css'

export default function myling() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺時，鬼嬰的腳步聲只會在 12 米內被玩家聽見，而不是一般的 20 米內。這稍微大於電子干擾的距離。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>鬼嬰的超自然聲音的最低間隔僅有 65 秒，而非一般的 80 秒。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>獵殺時的腳步聲與電器干擾距離幾乎相同。</div>
          <div>兩次超自然聲音的間隔為 65~80 秒。</div>
          <br />
          <div>※ <hl>鬼嬰不一定是小孩模型。</hl></div>
        </div>
      </div>
    </div>
  );
}
