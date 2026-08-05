export const evidences = [
  { id: 'emf', name: 'EMF 5級', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12a5 5 0 0 1 5 5"/></svg> },
  { id: 'dots', name: '點陣投影儀', icon: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/><circle cx="12" cy="12" r="1.5"/></svg> },
  { id: 'fp', name: '紫外線', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 23.5c-2 0-3.2-1-2.8-2.8.4-2.8-1.2-4-0.8-7.5.4-3.5 2-4.5 3.6-4.5s3.2 1 3.6 4.5c.4 3.5-1.2 4.7-0.8 7.5.4 1.8-0.8 2.8-2.8 2.8z" /><circle cx="7.5" cy="6" r="2" fill="currentColor" stroke="none" /> <circle cx="11.5" cy="4.5" r="1.6" fill="currentColor" stroke="none" /><circle cx="15" cy="5.5" r="1.4" fill="currentColor" stroke="none" /><circle cx="18" cy="8" r="1.2" fill="currentColor" stroke="none" /><circle cx="19.5" cy="11" r="1" fill="currentColor" stroke="none" /></svg> },
  { id: 'temp', name: '刺骨寒溫', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg> },
  { id: 'orb', name: '靈球', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> },
  { id: 'write', name: '鬼魂筆跡', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { id: 'box', name: '通靈盒', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg> },
  { id: 'eh', name: '早獵' },
  { id: 'acc', name: '視野加速'},
  { id: 'flw', name: '跟人' },
  { id: 'ns', name: '常速' },
  { id: 'nc', name: '無特徵\n(零證據遛一圈)' }
];

export const maps = [
  {
    id: 'tanglewoodDrive',
    name: '6 Tanglewood Drive',
    imgName: 'tanglewood_new',
    scale: 's'
  },
  {
    id: 'edgefieldRoad',
    name: '42 Edgefield Road',
    imgName: 'edgefield',
    scale: 's'
  },
  {
    id: 'ridgeviewCourt',
    name: '10 Ridgeview Court',
    imgName: 'ridgeview',
    scale: 's'
  },
  {
    id: 'nellsDinner',
    name: "Nell's Dinner",
    imgName: 'nells',
    scale: 's'
  },
  {
    id: 'graftonFarmhouse',
    name: 'Grafton Farmhouse',
    imgName: 'grafton_new',
    scale: 's'
  },
  {
    id: 'willowStreet',
    name: '13 Willow Street',
    imgName: 'willow_new',
    scale: 's'
  },
  {
    id: 'campWoodwind',
    name: 'Camp Woodwind',
    imgName: 'woodwind',
    scale: 's'
  },
  {
    id: 'pointHope',
    name: 'Point Hope',
    imgName: 'pointhope',
    scale: 'm'
  },
  {
    id: 'bleasdaleFarmhouse',
    name: 'Bleasdale Farmhouse',
    imgName: 'bleasdale_new',
    scale: 'm'
  },
  {
    id: 'mapleLodgeCampsite',
    name: 'Maple Lodge Campsite',
    imgName: 'maplelodge',
    scale: 'm'
  },
  {
    id: 'prison',
    name: 'Prison',
    imgName: 'prison',
    scale: 'm'
  },
  {
    id: 'browstoneHighSchool',
    name: 'Browstone High School',
    imgName: 'brownstone',
    scale: 'l'
  },
  {
    id: 'sunnyMeadows',
    name: 'Sunny Meadows',
    imgName: 'sunnymeadows',
    scale: 'l'
  },
];

export const ghostsData = [
  {
    id: 'aswang',
    name: '阿斯旺 Aswang',
    tag: '接近常速',
    evidence: ['write', 'temp', 'dots', 'ns', 'acc'],
    evidenceNames: ['點陣投影儀', '刺骨寒溫', '鬼魂筆跡'],
    desc: '初始速度較慢。獵殺時，玩家若於躲藏點被阿斯旺發現並不會死亡，而會立即結束獵殺。',
    threshold: ['', '50', '', ''],
    basicSpeed: ['1.53', '', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'banshee',
    name: '女妖 Banshee',
    tag: '目標一人',
    evidence: ['fp', 'orb', 'dots', 'ns', 'flw', 'nc','eh', 'acc'],
    evidenceNames: ['點陣投影儀', '紫外線', '靈球'],
    desc: '女妖每次只鎖定一個人攻擊。收音器及錄音機可以收到女妖獨特的哀號聲。鬼魂模型必定為女性。',
    threshold: ['', '50', '', '*'],
    basicSpeed: ['', '1.7', ''],
    gender: '女',
    acc: '有'
  },
  {
    id: 'dayan',
    name: '達彥 Dayan',
    tag: '',
    evidence: ['emf', 'orb', 'box', 'eh'],
    evidenceNames: ['EMF 5級', '靈球', '通靈盒'],
    desc: '如果有人在它附近移動，達彥會加快速度。鬼魂模型必定為女性。',
    threshold: ['45', ' 50', '65'],
    basicSpeed: ['1.2', '1.7', '2.25'],
    gender: '女',
    acc: '無 | 有 | 無'
  },
  {
    id: 'deildegast',
    name: '擾物靈 Deildegast',
    tag: '',
    evidence: ['emf', 'write', 'box'],
    evidenceNames: ['EMF 5級', '鬼魂筆跡', '通靈盒'],
    desc: '擾物靈擁有非常快的移動速度，但如果在獵殺間格中一直丟東西，他會變得很慢很慢。',
    threshold: ['', '50', ''],
    basicSpeed: ['0.4', '', '3.0'],
    gender: '未知',
    acc: '無'
  },
  {
    id: 'demon',
    name: '惡魔 Demon',
    tag: '',
    evidence: ['fp', 'write', 'temp', 'eh', 'ns', 'nc', 'acc'],
    evidenceNames: ['紫外線', '鬼魂筆跡', '刺骨寒溫'],
    desc: '惡魔能無視理智開啟獵殺，且獵殺更加頻繁。',
    threshold: ['', '50', '', '*'],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'deogen',
    name: '霧影 Deogen',
    tag: '',
    evidence: ['box', 'write', 'dots'],
    evidenceNames: ['點陣投影儀', '鬼魂筆跡', '通靈盒'],
    desc: '霧影能在獵殺時知道玩家位置，並且前往玩家所在地時移動得非常迅速，不過一旦靠近玩家就會非常緩慢。',
    threshold: ['40', '', ''],
    basicSpeed: ['0.4', '', '3.0'],
    gender: '未知',
    acc: '無'
  },
  {
    id: 'gallu',
    name: '加魯 Gallu',
    tag: '道具狂暴',
    evidence: ['emf', 'box', 'fp', 'ns', 'eh', 'nc', 'acc'],
    evidenceNames: ['EMF 5級', '紫外線', '通靈盒'],
    desc: '使用防護道具會促使加魯狂暴，從而削弱道具效果，但狂暴後就會變得虛弱。',
    threshold: ['40', '50', '60'],
    basicSpeed: ['1.36', '1.7', '1.955'],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'goryo',
    name: '御靈 Goryo',
    tag: '',
    evidence: ['emf', 'dots', 'fp', 'ns', 'nc', 'acc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '紫外線'],
    desc: '御靈不常離開鬼房，且點陣證據只能從攝影機中發現。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'hantu',
    name: '寒魔 Hantu',
    tag: '',
    evidence: ['fp', 'orb', 'temp'],
    evidenceNames: ['紫外線', '靈球', '刺骨寒溫'],
    desc: '寒魔獵殺時移動速度只隨環境溫度變化。在電閘關閉時能發現寒魔在吐寒氣。',
    threshold: ['', '50', ''],
    basicSpeed: ['1.4', '', '2.7'],
    gender: '未知',
    acc: '無'
  },
  {
    id: 'jinn',
    name: '巨靈 Jinn',
    tag: '接近常速',
    evidence: ['emf', 'fp', 'temp', 'ns', 'acc'],
    evidenceNames: ['EMF 5級', '紫外線', '刺骨寒溫'],
    desc: '巨靈不會關閉電閘，且在電閘開啟時巨靈的追逐速度更快。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'kormos',
    name: '盲靈 Kormos',
    tag: '',
    evidence: ['orb', 'box', 'fp', 'ns', 'nc', 'acc'],
    evidenceNames: ['紫外線', '靈球', '通靈盒'],
    desc: '盲靈看不到玩家，但能聽到玩家行走、奔跑。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'mare',
    name: '夢魘 Mare',
    tag: '',
    evidence: ['box', 'orb', 'write', 'ns', 'eh', 'nc', 'acc'],
    evidenceNames: ['靈球', '鬼魂筆跡', '通靈盒'],
    desc: '夢魘不會開燈，無論電閘是否開啟。夢魘在黑暗中更容易獵殺。',
    threshold: ['40', '', '60'],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'moroi',
    name: '魔洛伊 Moroi',
    tag: '',
    evidence: ['box', 'write', 'temp', 'acc'],
    evidenceNames: ['刺骨寒溫', '鬼魂筆跡', '通靈盒'],
    desc: '魔洛伊會詛咒聽到他聲音的人，使玩家更快的降低理智，且平均理智越低魔洛伊的移動速度越快。薰香致盲魔洛伊的時間更長。',
    threshold: ['', '50', ''],
    basicSpeed: ['1.5', '', '2.25'],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'myling',
    name: '鬼嬰 Myling',
    tag: '腳步聲小',
    evidence: ['emf', 'fp', 'write', 'ns', 'acc'],
    evidenceNames: ['EMF 5級', '紫外線', '鬼魂筆跡'],
    desc: '遠處聽不到鬼嬰的腳步聲。不限定為小孩模型。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'obake',
    name: '幻妖 Obake',
    tag: '變換模型',
    evidence: ['emf', 'fp', 'orb', 'ns', 'acc'],
    evidenceNames: ['EMF 5', '紫外線', '靈球'],
    desc: '幻妖會在獵殺閃爍時短暫變幻鬼魂模型。幻妖不一定會留下指紋，有概率出現六指掌印。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'obambo',
    name: '奧班博 Obambo',
    tag: '接近常速',
    evidence: ['write', 'fp', 'dots', 'ns', 'eh', 'acc'],
    evidenceNames: ['點陣投影儀', '鬼魂筆跡', '紫外線'],
    desc: '奧班博會依調查時間變幻兩種型態，平靜狀態不易互動及獵殺，狂暴狀態互動高、易獵殺且移動速度較快。',
    threshold: ['10', '', '65'],
    basicSpeed: ['1.445', '', '1.955'],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'oni',
    name: '赤鬼 Oni',
    tag: '閃爍快速',
    evidence: ['emf', 'temp', 'dots', 'ns', 'acc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '刺骨寒溫'],
    desc: '附近人多時赤鬼會變得活躍。赤鬼不會進行煙霧球哈氣。獵殺時閃爍頻率更高，現型時間較長。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'onryo',
    name: '怨靈 Onryo',
    tag: '',
    evidence: ['box', 'orb', 'temp', 'ns', 'eh', 'nc', 'acc'],
    evidenceNames: ['刺骨寒溫', '靈球', '通靈盒'],
    desc: '怨靈不會點燃任何火光，且在火光附近怨靈無法開啟獵殺，而會轉為吹滅火源。',
    threshold: ['', '50', '', '*'],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'phantom',
    name: '幻影 Phantom',
    tag: '閃爍極慢',
    evidence: ['box', 'fp', 'dots', 'ns', 'flw', 'acc'],
    evidenceNames: ['點陣投影儀', '紫外線', '通靈盒'],
    desc: '拍攝幻影時他會立即消失。獵殺時閃爍頻率極低，很難看到他的身影。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'poltergeist',
    name: '騷靈 Poltergeist',
    tag: '丟東西遠',
    evidence: ['box', 'write', 'fp', 'ns', 'acc'],
    evidenceNames: ['紫外線', '鬼魂筆跡', '通靈盒'],
    desc: '騷靈能一次性投擲互動範圍內所有物品。騷靈丟東西更快更遠。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'raiju',
    name: '雷魂 Raiju',
    tag: '電器加速',
    evidence: ['emf', 'orb', 'dots', 'ns', 'eh', 'nc', 'acc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '靈球'],
    desc: '雷魂能干擾遠處的電器，且在電器附近移動速度更快。雷魂在電器旁更容易發起獵殺。',
    threshold: ['', '50', '65'],
    basicSpeed: ['', '1.7', '2.5'],
    gender: '未知',
    acc: '有 | 無'
  },
  {
    id: 'revenant',
    name: '亡魂 Revenant',
    tag: '快速衝刺',
    evidence: ['orb', 'write', 'temp'],
    evidenceNames: ['刺骨寒溫', '靈球', '鬼魂筆跡'],
    desc: '亡魂在沒發現玩家時移動很慢，一旦檢測到目標便會高速追擊。',
    threshold: ['', '50', ''],
    basicSpeed: ['1.0', '', '3.0'],
    gender: '未知',
    acc: '無'
  },
  {
    id: 'shade',
    name: '暗影 Shade',
    tag: '',
    evidence: ['emf', 'write', 'temp', 'ns', 'nc', 'acc'],
    evidenceNames: ['EMF 5級', '刺骨寒溫', '鬼魂筆跡'],
    desc: '當玩家與暗影在同個房間時，暗影無法進行互動、事件、獵殺。暗影現身時傾向於黑影型態。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'spirit',
    name: '魂魄 Spirit',
    tag: '',
    evidence: ['emf', 'box', 'write', 'ns', 'nc', 'acc'],
    evidenceNames: ['EMF 5級', '鬼魂筆跡', '通靈盒'],
    desc: '薰香能有效阻止魂魄獵殺。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'thaye',
    name: '剎耶 Thaye',
    tag: '',
    evidence: ['orb', 'dots', 'write', 'eh'],
    evidenceNames: ['點陣投影儀', '靈球', '鬼魂筆跡'],
    desc: '剎耶會隨時間變老，減小移動速度及互動頻率。',
    threshold: ['15', '50', '75'],
    basicSpeed: ['1.0', '',  '2.75'],
    gender: '未知',
    acc: '無'
  },
  {
    id: 'theMimic',
    name: '擬魂 The Mimic',
    tag: '',
    evidence: ['box', 'fp', 'temp', 'orb', 'ns', 'eh', 'flw', 'nc', 'acc'],
    evidenceNames: ['紫外線', '刺骨寒溫', '通靈盒'],
    desc: '除以上三個證據，擬魂還會給出額外的靈球證據。擬魂能模仿其他鬼魂，給出該鬼魂的特徵。',
    threshold: ['' ,'未知', '', '*'],
    basicSpeed: ['', '未知', ''],
    gender: '未知',
    acc: '未知'
  },
  {
    id: 'theTwins',
    name: '孿魂 The Twins',
    tag: '接近常速',
    evidence: ['emf', 'box', 'temp', 'ns', 'acc'],
    evidenceNames: ['EMF 5級', '刺骨寒溫', '通靈盒'],
    desc: '孿魂有一快一慢兩個鬼魂。能同時互動兩個物品。',
    threshold: ['', '50', ''],
    basicSpeed: ['1.53','', '1.87'],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'wraith',
    name: '魅影 Wraith',
    tag: '不踩鹽',
    evidence: ['emf', 'box', 'dots', 'ns', 'flw', 'acc'],
    evidenceNames: ['EMF 5級', '點陣投影儀', '通靈盒'],
    desc: '魅影不會踩鹽。魅影能傳送到玩家附近並憑空給出 EMF 反應。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'yokai',
    name: '妖怪 Yokai',
    tag: '聾子',
    evidence: ['box', 'orb', 'dots', 'ns', 'eh', 'nc', 'acc'],
    evidenceNames: ['點陣投影儀', '靈球', '通靈盒'],
    desc: '在附近說話會使妖怪更容易獵殺。妖怪無法感知到較遠的聲音及電器。',
    threshold: ['', '50', '80'],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
  {
    id: 'yurei',
    name: '幽靈 Yurei',
    tag: '',
    evidence: ['orb', 'temp', 'dots', 'ns', 'nc', 'acc'],
    evidenceNames: ['點陣投影儀', '靈球', '通靈盒'],
    desc: '薰香會使幽靈困於鬼房內。幽靈能以輕柔的方式將門關閉，而非摔門。',
    threshold: ['', '50', ''],
    basicSpeed: ['', '1.7', ''],
    gender: '未知',
    acc: '有'
  },
];

export const items = [
  {
    id: 'EMFReader',
    name: 'EMF 讀取儀',
    desc: 'EMF 讀取儀是檢測鬼魂互動強度的電子設備，具有 1 ~ 5 的等級。若達到 5 級則為 EMF 5級證據。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '檢測到的EMF 強度會有誤差，最低讀數為EMF的標準級別。偵測範圍為 1.7 米。要測到EMF 5級時讀取儀必須跳在 5級和以上之間而不是低於 5級和 5級之間。讀取儀同時檢測到兩個或以上的信號，將顯示最高的EMF級別。',
          imgPath: 'EMFReader_T1.webp'
        },
        {
          title: '二級',
          text: '顯示標準的EMF級別，偵測範圍為 2 米，上面有五個LED燈珠，藍色對應 1級、綠色 2級、黃色3 級、橙色 4級、紅色 5級。EMF讀取儀檢測到信號時會亮起不同數量的LED。讀取儀同時檢測到兩個或以上的信號，將顯示最高的EMF級別。',
          imgPath: 'EMFReader_T2.webp'
        }
        ,
        {
          title: '三級',
          text: '可同時顯示靠近的三個EMF信息，偵測範圍為 3.5 米。屏幕上方以格數顯示EMF等級，左邊顯示八個方位，右邊顯示距離。',
          imgPath: 'EMFReader_T3.webp'
        },        
        {
          title: 'EMF 數值',
          text: 'EMF 讀取儀是檢測鬼魂EMF數值（鬼魂單次互動強度）的電子設備，具有 5 個等級。\n\n1 級：無活動\n2 級：鬼魂互動\n3 級：投擲物品\n4 級：現身、獵殺\n5 級：證據（若有， 2級3級活動有 25% 機率變為5級）',
        },
        {
          title: '使用技巧',
          text: '開啟（手上右鍵，地上左鍵）後直接丟（G）在鬼魂經常互動的地點（如鬼房），若檢測到EMF活動會根據等級發出音效，聽到聲音再查看即可。'
        }
      ],
      [
        {
          title: 'EMF 5級',
          text: '若鬼魂擁有EMF 5級證據，那麼任何一個EMF 2或 3級都有25%的幾率觸發EMF 5級。EMF 5級並不一定代表鬼魂在頻繁活動或者玩家處於危險當中。\n\n小技巧\nEMF 5級是基於鬼魂活動的，如果遇到暗影這種活動少的鬼，可能等半天都不給，需要離開鬼房讓鬼魂多互動、丟東西才會出現EMF 5級證據。'
        }
      ]
    ]
  },
  {
    id: 'dotsProjector',
    name: '點陣投影儀',
    desc: '點陣投影儀是能投出點陣的電子設備。有概率照出鬼魂的輪廓，即點陣投影儀證據。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '發出一道狹窄的點陣燈，可照射到5米長的距離。可放置（F）再平面上。如果難度設定手電筒關閉，一級點陣投影儀也不能使用。',
          imgPath: 'dotsProjector_T1.webp'
        },
        {
          title: '二級',
          text: '為區域燈光，可照射周圍 2.5 米的範圍。可直接貼（F）在地面、牆面、部分地圖的天花板上。',
          imgPath: 'dotsProjector_T2.webp'
        },
        {
          title: '三級',
          text: '能以約 135° 的範圍旋轉掃描，照射範圍為 7 米。可直接貼（F）在地面、牆面、部分地圖的天花板上。左鍵可輪流控制開、停止旋轉、關。',
          imgPath: 'dotsProjector_T3.webp'
        },
        {
          title: '使用技巧',
          text: '放置在鬼常經過的地點（鬼房），盡可能覆蓋最大範圍。三級點陣放在天花板有極好的效果。'
        }
      ],
      [
        {
          title: '點陣',
          text: '有點陣證據的鬼魂偶爾會進入「點陣狀態」，此時如果點陣投影儀照射到鬼魂的位置，會照出鬼魂的輪廓。\n點陣狀態可長可短，有時輪廓只閃一下，有時能讓鬼魂走過整個房間。鬼魂也可能用爬的經過點陣。',
          imgPath: 'ghostDots.png'
        },
        {
          text: '御靈的點陣證據只能在該房間內沒有任何玩家時從攝影機中看到。在缺少 1~2 證據的模式中，御靈不會缺少點陣證據。\n幻影的點陣輪廓會在被拍照或錄影後立即消失。'
        }
      ]
    ]
  },
  {
    id: 'UVLight',
    name: '紫外線燈光',
    desc: '紫外線燈光是用於探測證據的電子設備，包含非電器的螢光棒。能照出鬼魂的腳印、手印等。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '發出較狹窄的紫外線燈光，所以必需對準紫外線證據的方向照亮。',
          imgPath: 'UVLight_T1.webp'
        },
        {
          title: '二級',
          text: '激活螢光棒後會發光 1分鐘，並在之後 10 秒內亮度減半，重新使用可以使螢光棒再次發光。螢光棒不屬於電器，不會被鬼魂追蹤或觸發雷魂能力。',
          imgPath: 'UVLight_T2.webp'
        },
        {
          title: '三級',
          text: '發出較廣的紫外線燈光。',
          imgPath: 'UVLight_T3.webp'
        },
        {
          title: '使用技巧',
          text: '搭配鹽一起使用，將紫外線丟在鹽旁邊，當鬼魂踩鹽時，能馬上照出紫外線腳印。'
        }
      ],
      [
        {
          title: '紫外線',
          text: '分為指紋和腳印。\n\n有紫外線證據的鬼魂對門、開關、窗戶、鍵盤、冷藏箱、鏡子、燈籠、帳篷門、帳篷窗戶互動時，表面會出現指紋持續兩分鐘。閃燈和鬼魂事件導致的關門不會出現指紋。\n\n五指（掌印）：門、窗戶、冷藏箱、鏡子、燈籠、帳篷門、帳篷窗戶\n四指：鍵盤、監獄牢房門\n一指：電燈開關\n\n有紫外線證據鬼魂踩過鹽堆後，在 10 秒內移動會發出腳步聲並留下足跡，每個足跡將持續約 10~15 秒。鬼魂可能會踩入鹽堆然後立刻停下，此時將不會生成腳印。滿臉牙齒的兒童鬼魂模型留下的足跡略小於其他鬼魂模型留下的足跡。',
          imgPath: 'fingerprint.png'
        },
        {
          text: '幻妖只有 75% 機率留下紫外線證據，並且留下的紫外線有六分之一的機率多一根手指，如掌印為六指，指印為兩指。\n在缺少 1~2 證據的模式中，幻妖不會缺少紫外線證據。',
          imgPath: 'fingerprint_6.png'
        }
      ]
    ]
  },
  {
    id: 'thermometer',
    name: '溫度計',
    desc: '温度計是一種電子設備，包含非電器的水銀溫度計。能用來找出溫度較低的鬼房，及檢測 0℃ 以下的刺骨寒溫證據。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '測量所在房間的溫度，以 0.33°C/秒緩慢上升和下降。讀數以左邊為攝氏度（°C），右邊為華氏度（°F）。讀數誤差最多為 +3°C（不會低於實際溫度）。不屬於電器，不會被鬼魂追蹤或觸發雷魂能力。',
          imgPath: 'thermometer_T1.webp'
        },
        {
          title: '二級',
          text: '持續按住右鍵開始測量溫度，每 2.5 秒刷新一次數值。誤差最多為 +3°C（不會低於實際溫度）。',
          imgPath: 'thermometer_T2.webp'
        },
        {
          title: '三級',
          text: '持續按住右鍵開始測量溫度，每 1.5 秒刷新一次數值。誤差最多為 +2°C（不會低於實際溫度）。',
          imgPath: 'thermometer_T3.webp'
        },
        {
          title: '使用技巧',
          text: '先開啟電閘，再從調查區域深處的房間往回量測溫度尋找鬼房，測得溫度兩到三次都在下降的房間即為鬼房。'
        },
        {
          title: '初始溫度',
          text: '地圖的溫度受天氣影響。每種天氣類型有固定的環境溫度。解鎖出口門前，業餘難度的室內溫度為 20°C，其他難度則為環境溫度。房間溫度低於 5°C 時，玩家會呼出寒氣。\n\n日出：16°C\n晴天、大霧、血月：13°C\n小雨、暴雨、刮風：8°C\n下雪：5°C'
        },
        {
          title: '溫度影響',
          text: '解鎖出口門後，房間的溫度才會開始變化，以 0.1°C/s 下降或以 0.025°C/s 上升至目標溫度，溫度往低於環境溫度變化時會以三分之一的速度下降。電閘未開啟時，所有房間的目標溫度為環境溫度。如果電閘打開，室內房間的目標溫度會升到 20°C。室外溫度不受電閘開關的影響，包括營地地圖室外的帳篷和廁所。\n\n無論電閘開關，鬼魂所在的房間也會漸漸降溫，鬼魂離開會漸漸升溫。\n\n點燃小營地的營火可讓房間溫度上升到 20°C。營火本體通常會超過 500°C。大營地的營火不會觸發這樣的效果。',
        }
      ],
      [
        {
          title: '刺骨寒溫',
          text: '房間溫度降到 0°C 以下為刺骨寒溫證據，該溫度最低可降到 -10°C。\n\n一級：0°C 或以下\n二、三級：0.9°C 或以下'
        },
        {
          text: '在缺少 1~2 證據的模式中，寒魔不會缺少刺骨寒溫證據。'
        }
      ]
    ]
  },
  {
    id: 'videoCamera',
    name: '攝像機',
    desc: '攝像機是用來錄製影片的電子設備，也能用來檢測鬼房中漂浮的靈球證據。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '具有錄影及夜視功能，但畫質較差、視野狹窄且容易受到嚴重的干擾。',
          imgPath: 'videoCamera_T1.webp'
        },
        {
          title: '二級',
          text: '具有錄影及夜視功能，畫質中等、干擾較小。',
          imgPath: 'videoCamera_T2.webp'
        },
        {
          title: '三級',
          text: '具有錄影及夜視功能，畫質高且視野寬廣，不易受到干擾。',
          imgPath: 'videoCamera_T3.webp'
        },
        {
          title: '使用技巧',
          text: '手持單點右鍵可開關夜視模式，在車上監控電腦處可查看攝影畫面。鬼魂有幾率丟攝像機，尤其是沒放在三腳架上的攝像機。更高級三腳架會降低鬼魂丟它的幾率。'
        }
      ],
      [
        {
          title: '靈球',
          text: '靈球是在鬼魂房間飄浮的白色小球。在夜視模式下的螢幕可以看見。可通過地圖自帶的監視器或攝像機、一級頭戴設備看見。必須開啟夜視模式才能看見。\n\n三級頭戴設備（夜視鏡）不能用來查看靈球。'
        },
        {
          text: '擬魂的鬼房中也會出現靈球，但它並不算靈球證據，所以儘管在零證據的模式中，擬魂的鬼房中仍然會出現靈球。'
        }
      ],
      [
        {
          title: '錄製影片',
          text: '手持時長按右鍵或於監控電腦按下錄製鍵開始錄製。首次錄製各個類別時，影片會標有「唯一」印章。錄製同一類別的影片會將其標記為重複，獎勵較少的金錢。\n\n當使用高等級的設備錄製時，每塊媒體會額外獲得 $1 或 $2 獎勵。\n\n$20：幽靈變形、正在獵殺的鬼魂\n$15：鬼、影子幽靈、半透明幽靈、霧狀形態\n$10：D.O.T.S. 幽靈、燒焦的十字架\n$5 ：陽光牧場精神病院十字架、屍體、踩過的鹽、門被移動、熄滅火焰、火焰互動、鬼魂筆記、靈球、互動、燈光閃爍、燈泡爆炸、開關燈、檢測到運動、物體被扔、失真音樂、搖椅、通靈板'
        }
      ]
    ]
  },
  {
    id: 'book',
    name: '鬼魂筆記',
    desc: '鬼魂筆記是用於檢測鬼魂筆跡證據的裝備。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '互動範圍 3 米。鬼魂筆記需要放置（F）才能正常生效，扔出和拿着筆記沒有任何作用。',
          imgPath: 'book_T1.webp'
        },
        {
          title: '二級',
          text: '互動範圍 4 米。鬼魂筆記需要放置（F）才能正常生效，扔出和拿着筆記沒有任何作用。',
          imgPath: 'book_T2.webp'
        },
        {
          title: '三級',
          text: '互動範圍 5 米。鬼魂筆記需要放置（F）才能正常生效，扔出和拿着筆記沒有任何作用。',
          imgPath: 'book_T3.webp'
        },
        {
          title: '使用技巧',
          text: '放置（F）在鬼常經過的地點（鬼房）。有些筆跡在陰暗的環境下不明顯，可以觀察書本上的筆是否還存在。'
        }
      ],
      [
        {
          title: '鬼魂筆跡',
          text: '如果鬼魂的具有鬼魂筆跡證據，每 45~90 秒有幾率嘗試使用鬼魂筆記，筆記等級越高，成功幾率也越高，與此同時鬼魂筆記也在鬼魂互動範圍內，才會成功觸發寫字。\n\n當鬼開始寫筆記時，書會稍微懸浮，筆會開始瘋狂地在書頁上塗鴉，然後筆被扔在地上。同時會在原地生成EMF 2級讀數。\n\n沒有鬼魂筆跡證據的鬼魂，或鬼魂筆跡證據被隱藏，鬼魂可能會丟筆記。被鬼丟出的筆記會自動關閉。',
          imgPath: 'bookWriting.webp'
        }
      ]
    ]
  },
  {
    id: 'spiritbox',
    name: '通靈盒',
    desc: '通靈盒是用來與鬼魂交流的電子設備。它會不斷的發出白噪聲，若鬼魂回應了問題，即為通靈盒證據。',
    tag: 'ev',
    content: [
      [
        {
          title: '一級',
          text: '檢測範圍 3 米。麥克風指示亮紅光，表示正在聆聽玩家語音，鬼魂指示閃爍紅光表示成功判定語句但沒回應，閃爍白光表示有回應。',
          imgPath: 'book_T1.webp'
        },
        {
          title: '二級',
          text: '檢測範圍 4 米。螢幕左上角麥克風圖標閃爍，表示正在聆聽玩家語音，閃爍 X 表示鬼聽到問題但沒回應，閃爍鬼魂圖標表示有回應。',
          imgPath: 'book_T2.webp'
        },
        {
          title: '三級',
          text: '檢測範圍 5 米。MIC INPUT 指示燈發亮，表示正在聆聽玩家語音，RESPONSE 指示燈閃爍紅光表示鬼聽到問題但沒回應，閃爍白光表示有回應。',
          imgPath: 'book_T3.webp'
        },
        {
          title: '使用技巧',
          text: '在設定中將語音辨識模式改為文本，就可以直接選擇問題而不用開啟麥克風。\n\n站在鬼常經過的地點（鬼房）中央使用，或是將兩個通靈盒分別丟在鬼房兩側，通過語音激活通靈盒詢問。'
        }
      ],
      [
        {
          title: '通靈盒',
          text: '玩家需要在調查區內，並且鬼魂在通靈盒範圍內，同時關閉房間自帶的光源（不包含道具的燈光）鬼魂才會回應。若為要求單人回應的鬼魂，則只有在房間裡有一個人時才會回應。'
        },
        {
          text: '玩家在霧影的 1 米內時，有 33% 機率會以特殊的聲音回應通靈盒。在缺少 1~2 證據的模式中，霧影不會缺少通靈盒證據。',
          audio: {
            text: '霧影特殊通靈盒',
            path: 'DeogenBreathing'
          }
        },
        {
          title: '可詢問問題',
          text: '攻擊性問題：你想要什麼？ 你為什麼在這？ 你想傷害我們嗎？ 你生氣嗎？ 你要我們在這裡嗎？ 我們要離開嗎？ 我們該離開嗎？ 你想讓我們離開嗎？ 我們應該做什麼？ 我們可以幫你嗎？ 有什麼問題嗎？ 你友善嗎？\n\n位置問題：你在哪裡？ 你在附近嗎？ 你能現身嗎？ 給我們個信號。 讓我們知道你在這裡。 現身吧。 你現在方便說話嗎？ 和我們說話。 你在這裡嗎？ 你和我們在一起嗎？ 有人和我們在一起嗎？ 有人在嗎？ 房間裡有人嗎？ 有人在嗎？ 這裡有鬼魂嗎？ 這裡有鬼嗎？ 你在什麼位置？\n\n年齡問題：你多大了？ 你有多年輕？ 你幾歲？ 你是什​​麼時候出生的？ 你是小孩嗎？ 你是老人嗎？ 你是年輕人嗎？'
        }
      ]
    ]
  },
  {
    id: 'flashLight',
    name: '手電筒',
    desc: '',
    tag: ''
  },
  {
    id: 'crucifix',
    name: '十字架',
    desc: '',
    tag: ''
  },
  {
    id: 'fireLight',
    name: '火光',
    desc: '',
    tag: ''
  },
  {
    id: 'headGear',
    name: '頭戴設備',
    desc: '',
    tag: ''
  },
  {
    id: 'igniter',
    name: '點火器',
    desc: '',
    tag: ''
  },
  {
    id: 'incense',
    name: '薰香',
    desc: '',
    tag: ''
  },
  {
    id: 'motionSensor',
    name: '運動感測器',
    desc: '',
    tag: ''
  },
  {
    id: 'parabolicMic',
    name: '收音器',
    desc: '',
    tag: ''
  },
  {
    id: 'photoCamera',
    name: '相機',
    desc: '',
    tag: ''
  },
  {
    id: 'salt',
    name: '鹽',
    desc: '',
    tag: ''
  },
  {
    id: 'sanityMedicine',
    name: '理智藥',
    desc: '',
    tag: ''
  },
  {
    id: 'soundRecorder',
    name: '錄音機',
    desc: '',
    tag: ''
  },
  {
    id: 'soundSensor',
    name: '聲音感測器',
    desc: '',
    tag: ''
  },
  {
    id: 'tripod',
    name: '三腳架',
    desc: '',
    tag: ''
  },
  {
    id: 'musicBox',
    name: '八音盒',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'board',
    name: '通靈板',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'voodoo',
    name: '巫毒娃娃',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'mirror',
    name: '鬧鬼魔鏡',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'circle',
    name: '招喚陣',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'tarotCards',
    name: '塔羅牌',
    desc: '',
    tag: 'cursed'
  },
  {
    id: 'monkeyPaw',
    name: '猴爪',
    desc: '',
    tag: 'cursed'
  }
]