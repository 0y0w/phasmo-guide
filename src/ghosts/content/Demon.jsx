import '../../App.css'
import '../Ghost.css'

export default function demon() {
  return (
    <div className='desc-area'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>惡魔的獵殺冷卻為20秒，而非普通鬼魂的25秒。</div>
        <div className='desc-content'>使用薰香只能在 60 秒內阻止獵殺，而非普通鬼魂的 90 秒。十字架的生效範圍比其他鬼大 50%。</div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>惡魔有低概率使用能力，無視當前的平均理智開始獵殺，此種獵殺仍可以被十字架阻擋。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>兩次獵殺間隔在 25 秒之內。</div>
        <div className='desc-content'>對鬼魂使用薰香後，90 秒內再次開啟獵殺。</div>
      </div>
    </div>
  );
}
