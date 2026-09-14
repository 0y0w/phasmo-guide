import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function gallu() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>加魯有三種狀態，虛弱、普通、暴怒。初始為普通狀態。在 <hl>燒十字架</hl>、<hl>薰香致盲</hl>、<hl>踩鹽</hl> 後依序切換到下一狀態，直到為暴怒狀態。</div>
        <div className='desc-content'>加魯在 <hl>暴怒狀態</hl> 下結束獵殺，則切換為虛弱狀態。</div>
        <br />
        <div className='desc-content'>※ <hl>部分狀態切換行為依加魯當前狀態有延遲。</hl></div>
        <table className='desc-table' style={{'--cols': 4}}>
          <tbody>
            <tr><th></th><th>虛弱</th><th>普通</th><th>暴怒</th></tr>
            <tr><th>獵殺閾值</th><td>40%</td><td>50%</td><td>60%</td></tr>
            <tr><th>十字架範圍</th><td>-2 m</td><td>-</td><td>+1 m</td></tr>
            <tr><th>獵殺移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.36.mp3`} />1.36</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.7.mp3`} />1.7</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.955.mp3`} />1.955</td></tr>
            <tr><th>薰香致盲時長</th><td>6 s</td><td>5 s</td><td>4 s</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>暴怒狀態下不會踩鹽。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>在第一次獵殺前踩兩次鹽，且兩次中間間隔 3 秒以上，可排除加魯。</div>
        <div className='desc-content'>刻意觸發暴怒及虛弱，並注意分辨獵殺移速變化。</div>
      </div>
    </div>
  );
}
