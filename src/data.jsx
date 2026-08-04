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
            text: '檢測到的EMF會有誤差，最低讀數為EMF的標準級別。偵測範圍為 1.7 米。要測到EMF 5級時讀取儀必須跳在 5級和以上之間而不是低於 5級和 5級之間。讀取儀同時檢測到兩個或以上的信號，將顯示最高的EMF級別。',
            imgPath: 'EMFReader_T1.webp'
          },
          {
            title: '二級',
            text: '二級EMF讀取儀會顯示標準的EMF級別，偵測範圍為 2 米，上面有五個LED燈珠，藍色對應 1級、綠色 2級、黃色3 級、橙色 4級、紅色 5級。EMF讀取儀檢測到信號時會亮起不同數量的LED。讀取儀同時檢測到兩個或以上的信號，將顯示最高的EMF級別。',
            imgPath: 'EMFReader_T2.webp'
          }
          ,
          {
            title: '三級',
            text: '三級讀取儀可同時顯示靠近的三個EMF信息，偵測範圍為 3.5 米。屏幕上方以格數顯示EMF等級，左邊顯示八個方位，右邊顯示距離。',
            imgPath: 'EMFReader_T3.webp'
          },        
          {
            title: 'EMF 數值',
            text: '1 級：無活動\n2 級：鬼魂互動\n3 級：投擲物品\n4 級：現身、獵殺\n5 級：證據（若有， 2級3級活動有 25% 機率變為5級）',
          }
        ],
        [
          {
            title: 'EMF 5級',
            text: '如果被調查的鬼魂擁有EMF 5級證據，那麼任何一個EMF 2或 3級都有25%的幾率觸發EMF 5級。EMF 5級並不一定代表鬼魂在頻繁活動或者玩家處於危險當中。'
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
            title: '',
            text: '',
          }
        ]
        ]
    },
    {
        id: 'UVLight',
        name: '紫外線燈光',
        desc: '紫外線燈光是用於探測證據的電子設備，包含非電器的螢光棒。能照出鬼魂的腳印、手印等。',
        tag: 'ev'
    },
    {
        id: 'thermometer',
        name: '溫度計',
        desc: '温度計是一種電子設備，包含非電器的水銀溫度計。能用來找出溫度較低的鬼房，及檢測 0℃ 以下的刺骨寒溫證據。',
        tag: 'ev'
    },
    {
        id: 'videoCamera',
        name: '攝像機',
        desc: '攝像機是用來錄製影片的電子設備，也能用來檢測鬼房中漂浮的靈球證據。',
        tag: 'ev'
    },
    {
        id: 'book',
        name: '鬼魂筆記',
        desc: '鬼魂筆記是用於檢測鬼魂筆跡證據的裝備。',
        tag: 'ev'
    },
    {
        id: 'spiritbox',
        name: '通靈盒',
        desc: '通靈盒是用來與鬼魂交流的電子設備。它會不斷的發出白噪聲，若鬼魂回應了問題，即為通靈盒證據。',
        tag: 'ev'
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