import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function thetwins() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>50% 機率以主鬼獵殺，50% 機率以副鬼獵殺。</div>
          <br />
          <div>副鬼獵殺位置為主鬼遠處，但仍會先檢測主鬼的獵殺條件，如薰香、十字架阻擋獵殺。</div>
          <br />
          <div>獵殺時互動距離較遠、甚至能隔一個樓層。</div>
          <table className='desc-table' style={{'--cols': 3 }}>
            <tbody>
              <tr><th></th><th>主鬼</th><th>副鬼</th></tr>
              <tr><th>獵殺移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.0/1.53.mp3`} />1.53</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.0/1.87.mp3`} />1.87</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>並非真正有兩個鬼魂。</div>
          <br />
          <div>不會同時觸發兩個鬼魂事件、獵殺。</div>
          <br />
          <div>不會同時降低兩個房間的溫度。</div>
          <br />
          <div>不會同時觸發兩個距離遙遠的運動感測器。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>俗稱雙互動，可以同時在兩個地方產生互動，且第二個互動可以在遠處甚至隔一個樓層。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>兩次獵殺移動速度不同。（與加魯、奧班博速度相近）</div>
          <div>同時產生兩個互動。</div>
          <div>獵殺時互動距離很遠，能隔一層樓丟東西。</div>
        </div>
      </div>
    </div>
  );
}
