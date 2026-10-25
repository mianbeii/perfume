#!/bin/sh
# 加了新香水后跑一下：把页面上用到的字从完整字体里挑出来，打成小文件
# 完整字体在 _原图/（霞鹜文楷、Cormorant Garamond，都是 OFL 免费可商用）
cd "$(dirname "$0")"
python3 - <<'PY'
import string
s=open('index.html',encoding='utf-8').read()+open('data.js',encoding='utf-8').read()
c=set(ch for ch in s if ord(ch)>127)|set(string.printable)|set('，。、「」：；！？…—·《》（）¥')
open('/tmp/perfume_chars.txt','w',encoding='utf-8').write(''.join(sorted(c)))
PY
python3 -m fontTools.subset _原图/wenkai.ttf --text-file=/tmp/perfume_chars.txt --flavor=woff2 --layout-features='*' --output-file=fonts/wenkai.woff2
python3 -m fontTools.subset _原图/corm500.ttf --unicodes="U+0020-007E,U+00A0-00FF,U+2018-2019,U+2014" --flavor=woff2 --layout-features='*' --output-file=fonts/corm.woff2
ls -la fonts
