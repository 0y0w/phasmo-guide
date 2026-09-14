import '../../App.css'
import '../Ghost.css'

export default function obake() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>獵殺時會在特定幾次閃爍變換模型，第 12、27、39、54、62、80、105、120、132 次閃爍。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>能力</div>
        <div className='desc-content'>
          <div>每次有 1/4 機率不會留下指紋、腳印。</div>
          <br />
          <div>留下的指紋有 1/6 機率多一根手指。</div>
          <br />
          <div>偶爾使用能力使地圖上所有指紋存在時間減半，可連續使用能力。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>在應該留下指紋的互動中沒有留下指紋。</div>
          <div>指紋過早消失。</div>
          <div>特殊指紋，如六指。</div>
          <div>獵殺時切換模型。</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>特殊指紋</div>
        <div className='desc-img-area'>
          <div className='desc-img-content'><div className='desc-img-grid'><img src={`${import.meta.env.BASE_URL}item/fingerprint_6.png`} /></div><div style={{'fontWeight': 300}}>六指掌紋</div></div>
          <div className='desc-img-content'><div className='desc-img-grid'><img src={`${import.meta.env.BASE_URL}item/fingerprint_2.png`} /></div><div style={{'fontWeight': 300}}>二指開關</div></div>
        </div>
      </div>
    </div>
  );
}
