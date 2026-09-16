import '../../App.css'
import '../Ghost.css'

export default function raiju() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>雷魂在電器附近獵殺閾值更高、速度更快。</div>
          <div>小型地圖 6 米。中型地圖 8 米。大型地圖 10 米。</div>
          <table>
            <tbody>
              <tr><th></th><th>正常</th><th>電器</th></tr>
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
          <div></div>
          <div></div>
          <br />
          <div>※ <hl>較難由開燈房間投擲東西判斷。</hl></div>
        </div>
      </div>
    </div>
  );
}
