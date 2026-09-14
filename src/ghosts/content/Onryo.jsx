import '../../App.css'
import '../Ghost.css'

export default function onryo() {
  return (
    <div className='desc-block'>
      <div>
        <div className='desc-title'>獵殺</div>
        <div className='desc-content'>
          <div>怨靈平時的獵殺閾值為 60%，在火源邊則降為 40%。</div>
          <br />
          <div>怨靈在火源 4 米內嘗試獵殺時，會判定失敗並轉為吹滅火源，此行為優先於十字架。（同二級十字架範圍）</div>
          <br />
          <div>怨靈吹滅 2 次火源之後，每次吹滅火源會在 6 秒內嘗試獵殺，此獵殺無視當前理智，但仍可被十字架或另一火源阻擋。</div>
          <br />
          <div>※ <hl>有效火源包括 火光、打火機、營火、壁爐、地圖自帶的蠟燭。</hl></div>
        </div>
      </div>
      <div>
        <div className='desc-title'>活動</div>
        <div className='desc-content'>
          <div>若玩家死亡，增加怨靈吹滅火光的機率。</div>
          <br />
          <div>怨靈無法點燃任何火光。（使用巫毒娃娃除外）</div>
        </div>
      </div>
      <div>
        <div className='desc-title'>分辨</div>
        <div className='desc-content'>
          <div>在鬼房放滿火光，鬼魂一直吹滅火光而不獵殺。（需注意鬼魂可能遊蕩到鬼房外獵殺，可以在房門外也放置一火光）</div>
          <div>鬼魂在吹滅火光後 6 秒內獵殺。（所有鬼魂都有低機率出現此現象）</div>
          <div>在火源旁開起獵殺可排除怨靈。</div>
        </div>
      </div>
    </div>
  );
}
