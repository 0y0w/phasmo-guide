import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function raiju() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>雷魂在電器附近獵殺閾值提升至 65%、獵殺移速 <hl>固定</hl> 為 2.5。</div>
          <br />
          <div>電器加強範圍：小型地圖 6 米、中型地圖 8 米、大型地圖 10 米。</div>
          <br />
          <div>有效電器僅包含部分道具，地圖自帶的所有電器（電燈、電腦）、關閉的電器道具、直接丟下的相機、直接丟下攝影機，皆不會觸發雷魂加強。</div>
          <table className='desc-table' style={{'--cols': 3 }}>
            <tbody>
              <tr><th></th><th>正常</th><th>電器</th></tr>
              <tr><th>獵殺閾值</th><td>50%</td><td>65%</td></tr>
              <tr><th>獵殺移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.7.mp3`} />1.7</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/2.5.mp3`} />2.5（固定）</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>雷魂的電器干擾距離為 15 米，而非一般鬼的 10 米。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>電器附近早獵。（部分鬼魂也有機率出現此現象）</div>
          <div>獵殺時在電器旁邊加速且速度固定無視野加速，遠離電器後恢復正常速度 1.7。</div>
          <br />
          <div>※ <hl>電器加速期間仍會累積視野加速，可能在遠離電器後仍保持較高的速度。</hl></div>
        </div>
      </div>
    </div>
  );
}
