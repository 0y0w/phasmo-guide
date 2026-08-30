import '../../App.css'
import '../Ghost.css'
import SoundPlayer from '../../audioPlayer';

export default function deogen() {
  return (
    <div className='desc-area'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>霧影的移動速度取決於它與玩家的尋路距離，距離越長，霧影的速度就越快。在 2.5 米內，移動速度為 0.4，在 6 米以外，移動速度為 3.0。</div>
        <div className='desc-content'>霧影獵殺期間始終能知道玩家位置，無論躲在哪裡。</div>
        <div className='desc-content'>獵殺過程中，霧影的閃爍頻率比一般鬼高。</div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>玩家在霧影的 1 米內使用通靈盒時，有 1/3 幾率會以特殊的聲音回應通靈盒，聽起來像是沉重的呼吸聲。</div>
        <div className='desc-content'><SoundPlayer src={`${import.meta.env.BASE_URL}audio/DeogenBreathing.mp3`} />DeogenBreathing</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>在遠處時移動極快，以最短路徑衝向玩家，靠近後又變得非常慢。</div>
      </div>
    </div>
  );
}
