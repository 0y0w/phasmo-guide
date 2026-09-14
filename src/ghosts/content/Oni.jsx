import '../../App.css'
import '../Ghost.css'

export default function oni() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺時，鬼的模型閃爍較快。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>越多人在赤鬼附近互動頻率越高。</div>
          <br />
          <div>赤鬼不會進行煙霧球哈氣。</div>
          <br />
          <div>赤鬼有較大的機率以實體形態進行鬼魂事件。</div>
          <br />
          <div>鬼魂事件使玩家降低 20% 理智，而非一般的 10%。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>出現煙霧球哈氣可排除赤鬼。</div>
          <div>鬼魂事件降低 20% 理智。</div>
          <div>獵殺時模型閃爍更快。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>獵殺閃爍</div>
        <div className='desc-content'>
          <div>待新增...</div>
        </div>
      </div>
    </div>
  );
}
