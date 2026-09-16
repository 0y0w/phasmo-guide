import '../../App.css'
import '../Ghost.css'

export default function poltergeist() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺期間每 0.5 秒必定投擲一次物品，其他鬼魂只有 50% 成功率。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>可以在開燈房間內投擲物品。（其他鬼魂仍可在關燈房間隔牆投擲開燈房間物品）</div>
          <br />
          <div>騷靈可以把物品丟得更遠。</div>
          <table className='desc-table' style={{'--cols': 3 }}>
            <tbody>
              <tr><th></th><th>水平力度</th><th>垂直力度</th></tr>
              <tr><th>騷靈</th><td>2~6</td><td>3~6</td></tr>
              <tr><th>其他鬼魂</th><td>1~3</td><td>1~5</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>偶爾使用能力，投擲互動範圍內所有物品，並在原地留下 EMF 2級，同時每投擲一個物品使同個房間內的玩家降低 2% 理智。（可為直接扔出、懸浮後扔出、懸浮後落下）</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>使用能力同時投擲多個物品。</div>
          <div>獵殺時投擲物品特別頻繁且用力。</div>
          <br />
          <div>※ <hl>較難由開燈房間投擲東西判斷。</hl></div>
        </div>
      </div>
    </div>
  );
}
