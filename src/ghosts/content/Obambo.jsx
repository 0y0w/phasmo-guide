import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function obambo() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>奧班博有兩種狀態，平靜和狂暴。在打開調查區大門後，1 分鐘內為平靜狀態，之後每 2 分鐘變換為另一狀態。</div>
          <table className='desc-table' style={{'--cols': 3}}>
            <tbody>
              <tr><th></th><th>平靜</th><th>狂暴</th></tr>
              <tr><th>獵殺閾值</th><td>10%</td><td>65%</td></tr>
              <tr><th>獵殺移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.445.mp3`} />1.445</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.955.mp3`} />1.955</td></tr>
              <tr><th>獵殺時長</th><td>-</td><td>-20%</td></tr>
            </tbody>
          </table>
          <br />
          <div>※ <hl>獵殺期間可以變換狀態，導致速度變化，但不會改變獵殺時長。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>奧班博在平靜狀態時互動頻率極低，狂暴狀態時互動頻率極高。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>獵殺時速度隨時間不同變化。（注意與孿魂、加魯速度相近）</div>
          <div>在理智 10 ~ 65% 時，每兩分鐘會獵殺，每兩分鐘不會獵殺。</div>
          <div>狂暴狀態下獵殺時長較短。</div>
        </div>
      </div>
    </div>
  );
}
