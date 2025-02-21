export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/bafa.png',
    title: '[1.8.x] 戰鬥練習\n PvP Practice 🚿',
  },
  {
    id: 'world-2',
    imgUrl: '/sndh.png',
    title: '[1.21.4] 3D 槍械⭐\n Search And Destroy',
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
    subtitle: "在這個版本當中，我們將更新更多機能\n如：對戰配置、攻守交換、整合等工程！",
  },  
  {
    title: '[！] 伺服器重心將逐漸移至 SND 開發上。',
    subtitle: '⭐ We are moving our focus to SND development.\n🔻 PvP Practice will not longer have feature updates.',
  },
  {
    title: '[SND] 遊戲版本更新至 1.21.4',
    subtitle: "📣 1.19.4 → 1.21.4\n❗ 目前僅支援 1.21.4 遊玩",
  }
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: '地圖最佳化',
    subtitle:
        '除了新增一些地圖\n我們也著手修正舊版的地圖\n最佳化每一張地圖的細節\n使其更符合玩家戰鬥需求。',
  },
  {
    imgUrl: '/gunla.svg',
    title: 'SND Ver 1.14.0',
    subtitle:
        "WAIT Network 開發\n將 FPS 射擊遊戲\n復刻到 Minecraft 中！\n不須安裝任何模組即可遊玩！",
  }
  
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
    subtitle: 'HELPER/MOD',
  },
  {
    imgUrl: '/staff.png',
    title: 'more23',
    subtitle: 'HELPER/MOD',
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
    subtitle: 'HELPER',
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
        '將舊版 Practice 插件替換成更穩定的插件。而我們也持續地在更新當中!',
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
    title: '巴哈姆特 - WAIT Network',
    link: 'https://forum.gamer.com.tw/C.php?bsn=18673&snA=196728',
    subtitle:
        '【自架】【1.8 - 1.19.4】Wait Network 丨1.8PvP丨低延遲 高穩定丨...',
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
