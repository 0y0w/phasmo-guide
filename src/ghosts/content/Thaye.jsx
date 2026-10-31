import '../../App.css'
import '../Ghost.css'

export default function thaye() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>依老化程度決定其獵殺移速及閾值，初始移速 2.75、閾值 75%，最終移速 1.0、閾值 15%。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>每隔 1~2 分鐘嘗試老化，若有玩家在鬼魂附近則老化成功，並使通靈版詢問的年齡增加 1~4 歲。</div>
          <table className='desc-table' style={{'--cols': 4 }}>
            <tbody>
              <tr><th>老化</th><th>初始</th><th>每次老化</th><th>老化10次以上</th></tr>
              <tr><th>獵殺移速</th><td>2.75</td><td>-0.175</td><td>1.0</td></tr>
              <tr><th>獵殺閾值</th><td>75%</td><td>-6%</td><td>15%</td></tr>
              <tr><th>互動機率</th><td>200%</td><td>15%</td><td>50%</td></tr>
            </tbody>
          </table>
          <br />
          <div>※ <hl>獵殺期間仍會老化，並在獵殺結束後生效。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>在一開始十分活躍，頻繁觸發鬼魂事件，而後隨時間降變得不活躍。</div>
          <div>初始獵殺移速快，而後隨時間降低移速。</div>
        </div>
      </div>
    </div>
  );
}
