// 店里的香水都在这里。一款一段，照着格式加就行。
// family 香调：floral 花香 / citrus 柑橘 / woody 木质 / sweet 甜香 / fresh 清新 / amber 琥珀（辛香）
// gender：女 / 男 / 中性　　season：春 夏 秋 冬（可以写好几个）
// sizes：分装规格和价格（元），包邮的写 free: true
// pic：这一款自己的手绘瓶子图，放在 img/p/ 里；没有就不写，会用香调的通用瓶子图

const SHOP = {
  name: '一朵棉被',
  sub: '的香水小店',
  tip: '看中了点「加入小样盒」，挑完一键复制清单，回闲鱼发给我就好',
};

const PERFUMES = [
  { id: 'P001', pic: 'p/P001.jpg', brand: 'Hermès 爱马仕', name: '尼罗河花园', en: 'Un Jardin sur le Nil', family: 'fresh', gender: '中性', season: ['春', '夏'],
    say: '青芒果和莲花，河边的风', top: '青芒果、葡萄柚', heart: '莲花、风信子', base: '鸢尾、焚香、梧桐木',
    sizes: [{ ml: 1, price: 8 }, { ml: 5, price: 43, free: true }, { ml: 10, price: 66, free: true }] },
  { id: 'P002', pic: 'p/P002.jpg', brand: 'CLEAN 洁净', name: '暖棉 · 夏日限量版', en: 'Warm Cotton · Summer Limited', family: 'fresh', gender: '中性', season: ['春', '夏'],
    say: '刚从烘干机里拿出来的白床单，暖暖的、干干净净', top: '柑橘、马鞭草', heart: '棉花、橙花、海洋', base: '麝香、琥珀',
    sizes: [{ ml: 1, price: 5 }, { ml: 10, price: 35, free: true }] },
  { id: 'P003', pic: 'p/P003.jpg', brand: 'L\'Artisan 阿蒂仙', name: '寻找蝴蝶 · 老版黑瓶', en: 'La Chasse aux Papillons · EDP', family: 'floral', gender: '女', season: ['春', '夏'],
    say: '追着蝴蝶跑进开满白花的园子，晚香玉和橙花扑了一脸', top: '佛手柑、橘子、粉红胡椒', heart: '茉莉、晚香玉、椴花、橙花', base: '晚香玉、依兰',
    sizes: [{ ml: 1, price: 10 }, { ml: 5, price: 54, free: true }, { ml: 10, price: 89, free: true }] },
  { id: 'P004', pic: 'p/P004.jpg', brand: 'L\'Artisan 阿蒂仙', name: '黑莓缪斯', en: 'Mûre et Musc · EDT', family: 'sweet', gender: '中性', season: ['春', '夏', '秋'],
    say: '树丛里摘下的黑莓，裹着一层干净的白麝香', top: '柠檬、甜橙、罗勒、薰衣草', heart: '黑莓、红色莓果', base: '白麝香、橡木苔',
    sizes: [{ ml: 1, price: 15 }, { ml: 5, price: 79, free: true }, { ml: 10, price: 139, free: true }] },
  { id: 'P005', pic: 'p/P005.jpg', brand: 'L\'Artisan 阿蒂仙', name: '二货茶', en: 'Tea for Two · EDT', family: 'amber', gender: '中性', season: ['秋', '冬'],
    say: '冬天下午一壶烟熏正山小种，配一碟姜饼和蜂蜜', top: '正山小种红茶、生姜、八角', heart: '肉桂、蜂蜜、丁香、烟叶', base: '香草、皮革、愈创木、琥珀',
    sizes: [{ ml: 1, price: 15 }, { ml: 5, price: 79, free: true }, { ml: 10, price: 139, free: true }] },
  { id: 'P006', pic: 'p/P006.jpg', brand: 'L\'Artisan 阿蒂仙', name: '小偷玫瑰', en: 'Voleur de Roses · EDT', family: 'floral', gender: '中性', season: ['秋', '冬'],
    say: '雨后偷摘的玫瑰，花瓣上还沾着湿泥土', top: '李子', heart: '玫瑰', base: '广藿香',
    sizes: [{ ml: 1, price: 15 }, { ml: 5, price: 79, free: true }, { ml: 10, price: 139, free: true }] },
  { id: 'P007', pic: 'p/P007.jpg', brand: 'Zarkoperfume 扎科之香', name: '无情粉', en: 'Pink Molécule 090.09', family: 'fresh', gender: '中性', season: ['春', '夏', '秋'],
    say: '杏子和接骨木花，干干净净的粉色，越闻越像自己的皮肤', top: '接骨木莓、杏子、兰花', heart: '没有中调，前调直接落到木香里', base: '桃花心木、奶油、木质调',
    sizes: [{ ml: 1, price: 12 }, { ml: 5, price: 59, free: true }, { ml: 10, price: 109, free: true }] },
];
