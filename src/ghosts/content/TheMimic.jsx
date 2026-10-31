import '../../App.css'
import '../Ghost.css'

export default function themimic() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>根據模仿對象，變換獵殺型態、移速、閾值。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>在開始 1 分鐘後開始模仿其他鬼魂，每 30 秒到 1 分鐘重新模仿，獵殺期間不會切換。</div>
          <br />
          <div>根據模仿對象變換特徵，如互動頻率、特殊能力。包含幽靈的雙動門、幻妖的六指等。</div>
          <br />
          <div>不會模仿目標的證據，但除了基本 3 個證據外，還會額外給出靈球證據。</div>
          <br />
          <div>※ <hl>儘管在零證據模式下仍會出現靈球。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>出現額外的靈球證據。</div>
          <div>出現完全不同的鬼魂特徵。</div>
          <div>※ <hl>以證據定出寒魔、盲靈、怨靈時，需注意是否為擬魂。</hl></div>
        </div>
      </div>
    </div>
  );
}
