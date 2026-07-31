export const evidences = [
  { id: 'emf', name: 'EMF 5級', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12a5 5 0 0 1 5 5"/></svg> },
  { id: 'dots', name: '點陣投影儀', icon: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/><circle cx="12" cy="12" r="1.5"/></svg> },
  { id: 'fp', name: '紫外線', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 23.5c-2 0-3.2-1-2.8-2.8.4-2.8-1.2-4-0.8-7.5.4-3.5 2-4.5 3.6-4.5s3.2 1 3.6 4.5c.4 3.5-1.2 4.7-0.8 7.5.4 1.8-0.8 2.8-2.8 2.8z" /><circle cx="7.5" cy="6" r="2" fill="currentColor" stroke="none" /> <circle cx="11.5" cy="4.5" r="1.6" fill="currentColor" stroke="none" /><circle cx="15" cy="5.5" r="1.4" fill="currentColor" stroke="none" /><circle cx="18" cy="8" r="1.2" fill="currentColor" stroke="none" /><circle cx="19.5" cy="11" r="1" fill="currentColor" stroke="none" /></svg> },
  { id: 'temp', name: '刺骨寒溫', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg> },
  { id: 'orb', name: '靈球', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> },
  { id: 'write', name: '鬼魂筆跡', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { id: 'box', name: '通靈盒', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg> },
  { id: 'eh', name: '早獵' },
  { id: 'flw', name: '跟人' },
  { id: 'ns', name: '常速' },
  { id: 'nc', name: '無特徵\n(零證據遛一圈)' },
  { id: '', name: '...'}
];

export const ghostsData = [
  {
    id: 'Aswang',
    name: '阿斯旺 Aswang',
    threshold: '接近常速',
    evidence: ['write', 'temp', 'dots', 'ns'],
    evidenceNames: ['點陣投影儀', '刺骨寒溫', '鬼魂筆跡'],
    desc: '初始速度較慢。獵殺時，玩家若於躲藏點被阿斯旺發現並不會死亡，而會立即結束獵殺。'
},
{
    id: 'Banshee',
    name: '女妖 Banshee',
    threshold: '目標一人',
    evidence: ['fp', 'orb', 'dots', 'ns', 'flw', 'nc'],
    evidenceNames: ['點陣投影儀', '紫外線', '靈球'],
    desc: '女妖每次只鎖定一個人攻擊。收音器及錄音機可以收到女妖獨特的哀號聲。鬼魂模型必定為女性'
},
{
    id: 'Dayan',
    name: '達彥 Dayan',
    threshold: '',
    evidence: ['emf', 'orb', 'box', 'eh'],
    evidenceNames: ['EMF 5級', '靈球', '通靈盒'],
    desc: '如果有人在它附近移動，達彥會加快速度。鬼魂模型必定為女性。'
},
{
    id: 'Deildegast',
    name: '擾物靈 Deildegast',
    threshold: '',
    evidence: ['emf', 'write', 'box'],
    evidenceNames: ['EMF 5級', '鬼魂筆跡', '通靈盒'],
    desc: '擾物靈擁有非常快的移動速度，但如果在獵殺間格中丟東西，他會變得很慢很慢。'
},
{
    id: 'Demon',
    name: '惡魔 Demon',
    threshold: '',
    evidence: ['fp', 'write', 'temp', 'eh', 'ns', 'nc'],
    evidenceNames: ['紫外線', '鬼魂筆跡', '刺骨寒溫'],
    desc: '惡魔能無視理智開啟獵殺，且獵殺更加頻繁。'
},
{
    id: 'Deogen',
    name: '霧影 Deogen',
    threshold: '',
    evidence: ['box', 'write', 'dots'],
    evidenceNames: ['點陣投影儀', '鬼魂筆跡', '通靈盒'],
    desc: '霧影能在獵殺時知道玩家位置，並且前往玩家所在地時移動得非常迅速，不過一旦靠近玩家就會非常緩慢。'
},
{
    id: 'Gallu',
    name: '加魯 Gallu',
    threshold: '道具狂暴',
    evidence: ['emf', 'box', 'fp', 'ns', 'eh', 'nc'],
    evidenceNames: ['EMF 5級', '紫外線', '通靈盒'],
    desc: '使用防護道具會促使加魯狂暴，從而削弱道具效果，但狂暴後就會變得虛弱。'
},
{
    id: 'Goryo',
    name: '御靈 Goryo',
    threshold: '',
    evidence: ['emf', 'dots', 'fp', 'ns', 'nc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '紫外線'],
    desc: '御靈不常離開鬼房，且點陣證據只能從攝影機中發現。'
},
{
    id: 'Hantu',
    name: '寒魔 Hantu',
    threshold: '',
    evidence: ['fp', 'orb', 'temp'],
    evidenceNames: ['紫外線', '靈球', '刺骨寒溫'],
    desc: '寒魔獵殺時移動速度只隨環境溫度變化。在電閘關閉時能發現寒魔在吐寒氣'
},
{
    id: 'Jinn',
    name: '巨靈 Jinn',
    threshold: '接近常速',
    evidence: ['emf', 'fp', 'temp', 'ns'],
    evidenceNames: ['EMF 5級', '紫外線', '刺骨寒溫'],
    desc: '巨靈不會關閉電閘，且在電閘開啟時巨靈的追逐速度更快'
},
{
    id: 'Kormos',
    name: '盲靈 Kormos',
    threshold: '',
    evidence: ['orb', 'box', 'fp', 'ns', 'nc'],
    evidenceNames: ['紫外線', '靈球', '通靈盒'],
    desc: '盲靈看不到玩家，但能聽到玩家行走、奔跑'
},
{
    id: 'Mare',
    name: '夢魘 Mare',
    threshold: '',
    evidence: ['box', 'orb', 'write', 'ns', 'eh', 'nc'],
    evidenceNames: ['靈球', '鬼魂筆跡', '通靈盒'],
    desc: '夢魘不會開燈，無論電閘是否開啟。夢魘在黑暗中更容易獵殺。'
},
{
    id: 'Moroi',
    name: '魔洛伊 Moroi',
    threshold: '',
    evidence: ['box', 'write', 'temp'],
    evidenceNames: ['刺骨寒溫', '鬼魂筆跡', '通靈盒'],
    desc: '魔洛伊會詛咒聽到他聲音的人，使玩家更快的降低理智，且平均理智越低魔洛伊的移動速度越快。薰香致盲魔洛伊的時間更長。'
},
{
    id: 'Myling',
    name: '鬼嬰 Myling',
    threshold: '腳步聲小',
    evidence: ['emf', 'fp', 'write', 'ns'],
    evidenceNames: ['EMF 5級', '紫外線', '鬼魂筆跡'],
    desc: '遠處聽不到鬼嬰的腳步聲。不限定為小孩模型。'
},
{
    id: 'Obake',
    name: '幻妖 Obake',
    threshold: '變換模型',
    evidence: ['emf', 'fp', 'orb', 'ns'],
    evidenceNames: ['EMF 5', '紫外線', '靈球'],
    desc: '幻妖會在獵殺閃爍時短暫變幻鬼魂模型。幻妖不一定會留下指紋，有概率出現六指掌印。'
},
{
    id: 'Obambo',
    name: '奧班博 Obambo',
    threshold: '接近常速',
    evidence: ['write', 'fp', 'dots', 'ns', 'eh'],
    evidenceNames: ['點陣投影儀', '鬼魂筆跡', '紫外線'],
    desc: '奧班博會依調查時間變幻兩種型態，平靜狀態不易互動及獵殺，狂暴狀態互動高、易獵殺且移動速度較快。'
},
{
    id: 'Oni',
    name: '赤鬼 Oni',
    threshold: '閃爍快速',
    evidence: ['emf', 'temp', 'dots', 'ns'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '刺骨寒溫'],
    desc: '附近人多時赤鬼會變得活躍。赤鬼不會進行煙霧球哈氣。獵殺時閃爍頻率更高，現型時間較長。'
},
{
    id: 'Onryo',
    name: '怨靈 Onryo',
    threshold: '',
    evidence: ['box', 'orb', 'temp', 'ns', 'eh', 'nc'],
    evidenceNames: ['刺骨寒溫', '靈球', '通靈盒'],
    desc: '怨靈不會點燃任何火光，且在火光附近怨靈無法開啟獵殺，而會轉為吹滅火源。'
},
{
    id: 'Phantom',
    name: '幻影 Phantom',
    threshold: '閃爍極慢',
    evidence: ['box', 'fp', 'dots', 'ns', 'flw'],
    evidenceNames: ['點陣投影儀', '紫外線', '通靈盒'],
    desc: '拍攝幻影時他會立即消失。獵殺時閃爍頻率極低，很難看到他的身影。'
},
{
    id: 'Poltergeist',
    name: '騷靈 Poltergeist',
    threshold: '丟東西遠',
    evidence: ['box', 'write', 'fp', 'ns'],
    evidenceNames: ['紫外線', '鬼魂筆跡', '通靈盒'],
    desc: '騷靈能一次性投擲互動範圍內所有物品。騷靈丟東西更快更遠。'
},
{
    id: 'Raiju',
    name: '雷魂 Raiju',
    threshold: '電器加速',
    evidence: ['emf', 'orb', 'dots', 'ns', 'eh', 'nc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '靈球'],
    desc: '雷魂能干擾遠處的電器，且在電器附近移動速度更快。雷魂在電器旁更容易發起獵殺。'
},
{
    id: 'Revenant',
    name: '亡魂 Revenant',
    threshold: '快速衝刺',
    evidence: ['orb', 'write', 'temp'],
    evidenceNames: ['刺骨寒溫', '靈球', '鬼魂筆跡'],
    desc: '亡魂在沒發現玩家時移動很慢，一旦檢測到目標便會高速追擊。'
},
{
    id: 'Shade',
    name: '暗影 Shade',
    threshold: '',
    evidence: ['emf', 'write', 'temp', 'ns', 'nc'],
    evidenceNames: ['EMF 5級', '刺骨寒溫', '鬼魂筆跡'],
    desc: '當玩家與暗影在同個房間時，暗影無法進行互動、事件、獵殺。暗影現身時傾向於黑影型態。'
},
{
    id: 'Spirit',
    name: '魂魄 Spirit',
    threshold: '',
    evidence: ['emf', 'box', 'write', 'ns', 'nc'],
    evidenceNames: ['EMF 5級', '鬼魂筆跡', '通靈盒'],
    desc: '薰香能有效阻止魂魄獵殺。'
},
{
    id: 'Thaye',
    name: '剎耶 Thaye',
    threshold: '',
    evidence: ['orb', 'dots', 'write', 'eh'],
    evidenceNames: ['點陣投影儀', '靈球', '鬼魂筆跡'],
    desc: '剎耶會隨時間變老，減小移動速度及互動頻率。'
},
{
    id: 'TheMimic',
    name: '擬魂 The Mimic',
    threshold: '',
    evidence: ['box', 'fp', 'temp', 'orb', 'ns', 'eh', 'flw', 'nc'],
    evidenceNames: ['紫外線', '刺骨寒溫', '通靈盒'],
    desc: '除以上三個證據，擬魂還會給出額外的靈球證據。擬魂能模仿其他鬼魂，給出該鬼魂的特徵。'
},
{
    id: 'TheTwins',
    name: '孿魂 The Twins',
    threshold: '接近常速',
    evidence: ['emf', 'box', 'temp', 'ns'],
    evidenceNames: ['EMF 5級', '刺骨寒溫', '通靈盒'],
    desc: '孿魂有一快一慢兩個鬼魂。能同時互動兩個物品。'
},
{
    id: 'Wraith',
    name: '魅影 Wraith',
    threshold: '不踩鹽',
    evidence: ['emf', 'box', 'dots', 'ns', 'flw'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '通靈盒'],
    desc: '魅影不會踩鹽。魅影能傳送到玩家附近並憑空給出 EMF 反應。'
},
{
    id: 'Yokai',
    name: '妖怪 Yokai',
    threshold: '聾子',
    evidence: ['box', 'orb', 'dots', 'ns', 'eh', 'nc'],
    evidenceNames: ['點陣投影儀', '靈球', '通靈盒'],
    desc: '在附近說話會使妖怪更容易獵殺。妖怪無法感知到較遠的聲音及電器。'
},
{
    id: 'Yurei',
    name: '幽靈 Yurei',
    threshold: '',
    evidence: ['orb', 'temp', 'dots', 'ns', 'nc'],
    evidenceNames: ['點陣投影儀', '靈球', '通靈盒'],
    desc: '薰香會使幽靈困於鬼房內。幽靈能以輕柔的方式將門關閉，而非摔門。'
},
];