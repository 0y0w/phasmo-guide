import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function hantu() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>寒魔的獵殺移速完全依房間溫度決定，溫度越低移速越快。</div>
        <br />
        <div className='desc-content'>寒魔獵殺時，若電閘關閉會吐出寒氣。</div>
        <br />
        <div className='desc-content'>※ <hl>獵殺時房間溫度仍會變化，即使寒魔一直在同個房間速度依然會變化。</hl></div>
        <table className='desc-table' style={{'--cols': 8}}>
          <tbody>
            <tr><th>{'溫度 °C'}</th><td>{'> 15'}</td><td>{'12~15'}</td><td>{'9~12'}</td><td>{'6~9'}</td><td>{'3~6'}</td><td>{'0~3'}</td><td>{'< 0'}</td></tr>
            <tr><th>獵殺移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.4.mp3`} />1.4</td><td>1.75</td><td>2.1</td><td>2.3</td><td>2.4</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/2.5.mp3`} />2.5</td><td>2.7</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>寒魔有高於一般鬼 2 倍機率關閉電閘，且永遠不會關閉電閘。</div>
        <br />
        <div className='desc-content'>在缺少證據的難度下，<hl>刺骨寒溫</hl> 證據不會被影藏。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>只在鬼房附近低溫區域移動速度快，遠離後移動速度降低。</div>
        <div className='desc-content'>觀察獵殺且電閘關閉時，鬼魂吐出寒氣。</div>
      </div>
    </div>
  );
}
