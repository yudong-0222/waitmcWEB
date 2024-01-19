export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/bafa.png',
    title: '[1.8.x]\n PvP Practice',
  },
  {
    id: 'world-2',
    imgUrl: '/sndh.png',
    title: '[1.16.5]\n Search And Destroy',
  },
  {
    id: 'world-3',
    imgUrl: '/discordsupport.png',
    title: 'Discord 社群支援🚑',
  },
  {
    id: 'world-4',
    imgUrl: '/maps.png',
    title: '多樣、多變化的遊戲地圖🚀',
  },
  {
    id: 'world-5',
    imgUrl: '/update.png',
    title: '穩定更新⛽',
  },
];

export const newsLA = [
  {
    title: '[SND] Ver 1.14.0 即將到來...',
    subtitle: "在這個版本當中，我們將更新更多機能\n如：對戰配置、攻守交換、整合性優化...等工程！",
  },  
  {
    title: '[SND] M24 即將登場...',
    subtitle: 'M24狙擊步槍是雷明頓700步槍的衍生型\n將於不久的未來加入戰場，敬請期待。',
  },
  {
    title: '[SND] SCAR-H 現已推出',
    subtitle: "適用模式為：經典爆破。\n詳見 Discord 社群公告。",
  },
  {
    title: '[SND] M1014 現已推出',
    subtitle: "適用模式為：經典爆破。\n詳見 Discord 社群公告。",
  },
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: '新地圖',
    subtitle:
        '新增一些地圖...\n比起舊版的地圖\n新增加的地圖更適合戰鬥了。',
  },
  {
    imgUrl: '/headset.svg',
    title: 'SND Ver 1.13.7',
    subtitle:
        "由 WAIT Network 製作\n將 FPS 射擊遊戲的爆破模式\n復刻到 Minecraft 中!",
  },
];

export const owner = [
  {
    imgUrl: '/me.png',
    title: 'YuDong',
    subtitle: 'Also a Developer in WAIT NETWORK.',
  },
  {
    imgUrl: '/fn7182.png',
    title: 'FN7182',
    subtitle: 'Also a Chief Builder in WAIT NETWORK.',
  },
];

function copy() {
  const textToCopy = 'waitmc.top';

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');

  document.body.removeChild(tempInput);

  Swal.fire({
    title: '複製成功',
    text: '成功將伺服器IP複製到剪貼簿了!',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
}

export const navLinks = [
  {
    id: "/",
    title: "HOME",
  },
  {
    id: "/modes",
    title: "MODES",
  },
  {
    id: "/moderator",
    title: "MODERATOR",
  },
  {
    id: "https://discord.gg/RNJQFYbjVp",
    title: "DISCORD",
  },
];

export const admin = [
  {
    imgUrl: '/icecloud.png',
    title: 'IceCloud',
    subtitle: 'Youtube:冰雲 ice cloud',
  },
  {
    imgUrl: '/ggininder.png',
    title: 'Zh',
    subtitle: 'Also a Builder in WAIT NETWORK',
  },
];

export const staff = [
  {
    imgUrl: '/staff.png',
    title: 'more_fei',
    subtitle: 'CO-OWNER',
  },
  {
    imgUrl: '/staff.png',
    title: 'more23',
    subtitle: 'CO-OWNER',
  },
  {
    imgUrl: '/staff.png',
    title: 'more_sn',
    subtitle: 'HELPER/MOD',
  },
  {
    imgUrl: '/staff.png',
    title: 'iL4xz#0140',
    subtitle: 'HELPER/MOD',
  },
  {
    imgUrl: '/staff.png',
    title: 'ccwwxccwwx',
    subtitle: 'HELPER (Trial)',
  },
];

export const modes = [
  {
    imgUrl: '/adjust.svg',
    title: '調整地圖',
    subtitle:
        '我們從許多玩家的回饋中,調整了許多張地圖,使某些造景地圖不再影響PvP的體驗!',
  },
  {
    imgUrl: '/modes.svg',
    title: '多種模式',
    subtitle:
        '將舊版Practice插件替換成更穩定的插件。而我們也持續地在更新當中!',
  },
];

export const sndmodes = [
  {
    imgUrl: '/nice.svg',
    title: '適合槍戰的地圖',
    subtitle:
        '不僅僅從FPS中複製模式! 我們也將地圖帶進來Wait Network了! 也包含了我們自製的地圖',
  },
  {
    imgUrl: '/gunla.svg',
    title: '特殊武器',
    subtitle:
        'SnD將Minecraft的戰鬥模式改變了! 從現在起，大家都用槍枝來說話!',
  },
];


export const insights = [
  {
    imgUrl: '/gamer.png',
    title: '巴哈姆特上的Wait Network文章',
    link: 'https://forum.gamer.com.tw/C.php?bsn=18673&snA=196728',
    subtitle:
        '【自架】【1.8 - 1.19】Wait Network 丨1.8PvP丨低延遲 高穩定丨...',
  },
];



export const socials = [
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'https://www.instagram.com/wait_network/',
  },
  {
    name: 'discord',
    url: '/discord.svg',
    link: 'https://discord.gg/RNJQFYbjVp',
  },
];
