import '../../App.css'
import '../Ghost.css'

export default function kormos() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>盲靈可以聽到玩家的腳步聲，但無法聽到使用物品、丟棄物品的聲音。</div>
          <table className='desc-table' style={{'--cols': 4}}>
            <tbody>
              <tr><th>行為</th><td>跑步</td><td>站著走路</td><td>蹲著走路</td></tr>
              <tr><th>範圍</th><td>30 米</td><td>15 米</td><td>10 米</td></tr>
            </tbody>
          </table>
          <br />
          <div>若盲靈同時聽到多名玩家移動，依序追擊跑步玩家、站著走路、蹲著走路、電器或說話。</div>
          <br />
          <div>追蹤 5 米外的目標時，基礎速度變更為 2.21，此狀態繼承視野加速的效果，意味著盲靈的最高速度能達到 3.65，而非一般視野加速上限 2.81。</div>
          <br />
          <div>盲靈追擊 5 米範圍內的目標時才會開始累計視野加速。</div>
          <br />
          <div>※ <hl>儘管盲靈沒有發現玩家，獵殺時穿過玩家仍然會死亡。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>盲靈不會觸發追擊類的鬼魂事件（哈氣）。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>完全靜止的站立在空曠處，觀察鬼魂看不看得到。</div>
          <div>在盲靈朝你追來時速度較快，待到近處後恢復正常速度。（巨靈也可能觸發此現象）</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>已知 BUG</div>
        <div className='desc-content'>
          <div>盲靈在前往路徑點時，穿過蹲下的玩家不會死亡，但如果路徑點離玩家過近，盲靈會再回頭擊殺玩家。</div>
        </div>
      </div>
    </div>
  );
}
