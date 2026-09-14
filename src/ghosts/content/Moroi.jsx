import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function moroi() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>薰香對魔洛伊的致盲時間為 7 秒，而非一般鬼的 5 秒。</div>
          <br />
          <div>魔洛伊的基礎移速隨平均理智變化，平均理智越低鬼魂移速越快，平均 30~35% 時接近常速 1.7。</div>
          <table className='desc-table' style={{'--cols': 11}}>
            <tbody>
              <tr><th>平均理智</th><td>≥ 45%</td><td>40~45%</td><td>35~40%</td><td>30~35%</td><td>25~30%</td><td>20~25%</td><td>15~20%</td><td>10~15%</td><td>5~10%</td><td>0~5%</td></tr>
              <tr><th>基礎移速</th><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/1.5.mp3`} />1.5</td><td>1.583</td><td>1.66</td><td>1.749</td><td>1.832</td><td>1.915</td><td>1.998</td><td>2.081</td><td>2.164</td><td><SoundPlayer src={`${import.meta.env.BASE_URL}audio/2.25.mp3`} />2.25</td></tr>
            </tbody>
          </table>
          <br />
          <div>※ <hl>魔洛伊有視野加速。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>玩家聽到魔洛伊的通靈盒回覆和超自然聲音時，會被施加詛咒，使理智下降速度為正常的兩倍，且待在燈光或火光旁邊理智仍會下降。使用理智藥後可解除詛咒。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>聽到魔洛伊聲音後理智下降速度特別快。</div>
          <div>快鬼且有視野加速。</div>
          <div>獵殺時薰香致盲時間較長。</div>
        </div>
      </div>
    </div>
  );
}
