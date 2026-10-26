// 店里的香水都在这里。一款一段，照着格式加就行。
// family 香调：floral 花香 / citrus 柑橘 / woody 木质 / sweet 甜香 / fresh 清新 / amber 琥珀（辛香）
// gender：女 / 男 / 中性　　season：春 夏 秋 冬（可以写好几个）
// sizes：分装规格和价格（元），包邮的写 free: true
// pic：这一款自己的手绘瓶子图，放在 img/p/ 里；没有就不写，会用香调的通用瓶子图

const SHOP = {
  name: '一朵棉被',
  sub: '的香水小店',
  tip: '看中了点「加入小样盒」，挑完一键复制清单，回闲鱼发给我就好',
  // 闲鱼主页的分享链接（闲鱼 → 我的 → 个人主页 → 分享 → 复制链接，整段贴进来）
  xianyu: '【闲鱼】https://m.tb.cn/h.j3KxF8S?tk=wbmbTxAyeXn CZ057 「这是我的闲鱼号，快来看看吧～」\n点击链接直接打开',
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
  { id: 'P008', pic: 'p/P008.jpg', brand: 'Tom Ford 汤姆福特', name: '乌木沉香 · 19年老版', en: 'Oud Wood · EDP', family: 'woody', gender: '中性', season: ['秋', '冬'],
    say: '老书房里的檀木和沉香，带一点小豆蔻的辛辣，安静又贵气', top: '花梨木、小豆蔻、四川花椒', heart: '沉香木、檀香木、岩兰草', base: '零陵香豆、香草、琥珀',
    sizes: [{ ml: 1, price: 22 }, { ml: 5, price: 99, free: true }] },
  // pick：一个系列多种味道、同一个价，顾客点开自己挑。
  // 规格写了 mix: true 的是「凑一瓶」：最多 max 种、每种至少 min 毫升、凑满 total 毫升；没写 mix 的是单买，挑几种就是几支
  { id: 'P009', pic: 'p/P009.jpg', brand: 'Demeter 帝门特', name: '气味图书馆', en: 'Demeter Fragrance Library', family: 'fresh', gender: '中性', season: ['春', '夏', '秋', '冬'],
    say: '把生活里的味道装进瓶子：雨前的风、旧书页、刚磨的咖啡',
    pick: { max: 5, total: 10, min: 2, options: ['暴风雨', '初生婴儿', '平装书', '现磨咖啡', '忍冬', '竹子', '金汤力', '婴儿爽身粉', '纯牛奶', '凤梨椰奶酒',
      '桃子', '姜汁汽水', '纯净肌肤', '山间空气', '咸空气', '西瓜棒棒糖', '洗衣间', '青草', '巧克力曲奇', '黑巧克力'] },
    sizes: [{ ml: 2, price: 10 }, { ml: 10, price: 39, free: true, mix: true }] },
  { id: 'P010', pic: 'p/P010.jpg', brand: 'Montblanc 万宝龙', name: '纯白印记 · 墨水瓶', en: 'Signature · EDP', family: 'floral', gender: '女', season: ['春', '秋', '冬'],
    say: '干净的白麝香裹着木兰和桂花，像刚洗过的白衬衫，温柔不张扬', top: '橘子', heart: '木兰、桂花、牡丹', base: '白麝香、香草、安息香',
    sizes: [{ ml: 1, price: 7 }, { ml: 10, price: 59, free: true }] },
  { id: 'P011', pic: 'p/P011.jpg', brand: 'Armani Privé 阿玛尼', name: '玉龙茶香', en: 'Thé Yulong · EDT', family: 'fresh', gender: '中性', season: ['春', '夏'],
    say: '一杯刚泡开的绿茶，茶汤清亮，混着一点桂花和姜的暖', top: '柑橘、生姜', heart: '绿茶、桂花、茉莉', base: '白麝香、木质调',
    sizes: [{ ml: 1, price: 9 }, { ml: 10, price: 75, free: true }] },
  { id: 'P012', pic: 'p/P012.jpg', brand: 'Armani Privé 阿玛尼', name: '苏州牡丹 · 流沙版', en: 'Pivoine Suzhou · Soie de Nacre', family: 'floral', gender: '女', season: ['春', '夏'],
    say: '园林里盛开的粉牡丹，瓶里的珠光像流沙一样慢慢转', top: '粉红胡椒、柑橘', heart: '牡丹、玫瑰、铃兰', base: '白麝香、木质调',
    sizes: [{ ml: 1, price: 10 }, { ml: 10, price: 85, free: true }] },
  { id: 'P013', pic: 'p/P013.jpg', brand: 'Marc Jacobs 马克雅克布', name: '小雏菊', en: 'Daisy · EDT', family: 'floral', gender: '女', season: ['春', '夏'],
    say: '草莓和紫罗兰叶，春天野地里的一小把雏菊，甜甜的、很少女', top: '草莓、紫罗兰叶、红葡萄柚', heart: '栀子花、紫罗兰、茉莉', base: '麝香、香草、白木',
    sizes: [{ ml: 1, price: 6 }, { ml: 5, price: 28 }, { ml: 10, price: 46, free: true }] },
  { id: 'P014', pic: 'p/P014.jpg', brand: 'Tom Ford 汤姆福特', name: '咖啡玫瑰 · 紫标', en: 'Café Rose · EDP', family: 'floral', gender: '中性', season: ['秋', '冬'],
    say: '深夜咖啡馆桌上的一枝暗红玫瑰，咖啡的苦混着焚香，浓郁又克制', top: '藏红花、咖啡、黑胡椒', heart: '土耳其玫瑰、五月玫瑰、保加利亚玫瑰', base: '广藿香、焚香、檀香木、琥珀',
    sizes: [{ ml: 1, price: 20 }, { ml: 5, price: 99, free: true }] },
  { id: 'P015', pic: 'p/P015.jpg', brand: 'YSL 圣罗兰', name: '反转巴黎 · 波点淡香', en: 'Mon Paris · EDT', family: 'floral', gender: '女', season: ['春', '夏'],
    say: '巴黎春天的约会，梨和莓果甜得软乎乎的，比浓香版轻盈俏皮', top: '梨、红莓、佛手柑', heart: '白牡丹、茉莉、橙花', base: '白麝香、广藿香',
    sizes: [{ ml: 1, price: 8 }, { ml: 10, price: 69, free: true }] },
];
