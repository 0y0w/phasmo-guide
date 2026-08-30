import '../../App.css'
import '../Ghost.css'

export default function dayan() {
  return (
    <div className='desc-area'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>當任意玩家距離達彥 10 米以內時，鬼魂的獵殺理智閾值與獵殺速度會根據最近的玩家產生變化。若該玩家靜止不動，獵殺閾值降至 45%，鬼魂速度固定為 1.2。若該玩家正在移動，獵殺閾值升至 65%，鬼魂速度固定為 2.25。</div>
        <div className='desc-contnet'>沒有玩家在達彥 10 米範圍內時，鬼魂恢復標準獵殺閾值 50%，並遵循標準鬼魂速度 1.7，並具有視野加速。</div>
        <br />
        <div className='desc-content'>※ 檢測到玩家移動並不代表獲知玩家位置。</div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>在牆後或躲藏點移動，觀察鬼魂經過時的移速變化。</div>
        <div className='desc-content'>遛鬼時短暫停下，觀察鬼魂移速變化。</div>
        <div className='desc-content'>為女性鬼魂，若出現男性名字、男性模型，且在錄音機、鬼魂事件、獵殺過程中發出男性聲音，則可以排除。</div>
      </div>
    </div>
  );
}
