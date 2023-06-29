export const resourceCenterTemplate = [
  {
    html: `<h1 data-lines="1" data-sign="1b2a4784b0075d16d6af6f414b6c556c" id="%E6%A0%87%E9%A2%98%E4%B8%80">标题一</h1>`,
    md: `#标题一`,
  },
  {
    html: `<h2 data-lines="1" data-sign="aaec6352e067ddadc8085337a9458544" id="%E6%A0%87%E9%A2%98%E4%BA%8C">标题二</h2>`,
    md: `##标题二`,
  },
  {
    html: `<h3 data-lines="1" data-sign="56b34d6d688936dd563e752b3d2400e9" id="%E6%A0%87%E9%A2%98%E4%B8%89" style="padding:10px 0">标题三</h3>`,
    md: `###标题三`,
  },
  {
    html: `<h4 data-lines="1" data-sign="83b2c5be37230f829382daa3088ab48b" id="%E6%A0%87%E9%A2%98%E5%9B%9B"  style="padding:10px 0">标题四</h4>`,
    md: `####标题四`,
  },
  {
    html: `<h5 data-lines="1" data-sign="83b2c5be37230f829382daa3088ab48b" id="%E6%A0%87%E9%A2%98%E5%9B%9B"  style="padding:10px 0">标题五</h5>`,
    md: `####标题五`,
  },
  {
    html: `<h6 data-lines="1" data-sign="83b2c5be37230f829382daa3088ab48b" id="%E6%A0%87%E9%A2%98%E5%9B%9B"  style="padding:10px 0">标题六</h6>`,
    md: `####标题六`,
  },
  {
    html: '<p data-lines="1" data-type="p" data-sign="5273ee5e01a07174ee1e0e3e726f02851" ><strong>ECG（Electrocardiogram）</strong></p>',
    md: `**ECG（Electrocardiogram）**`,
  },
  {
    html: '<ul class="cherry-list__circle" data-sign="58cf10ab40be4774644f8e472370a232" data-lines="2"><li><p>列表1</p></li><li><p>列表2</p></li></ul>',
    md: `+ 列表1
+ 列表2`,
  },
  {
    html: `<blockquote data-lines="2" data-sign="e4b788bbacb74b13f9c2ac1361a69533_2" style="border-left: 2px solid rgba(60, 60, 60, 0.29);
    padding-left: 16px;
    transition: border-color 0.5s;
    margin: 16px 0;">[1] R.W. De Boer<br>[2] R.J. Kitney, O. Rompelman,</blockquote>`,
    md: `
>[1] R.W. De Boer
>[2] R.J. Kitney, O. Rompelman,`,
  },
  {
    html: `<p data-lines="1" data-type="p" data-sign="7aad6bfdc153ce6380278dd5b08638cc1"  style="padding:10px 0;"><em>Design &gt; Screen Based &gt; Settings</em></p>`,
    md: `*Design > Screen Based > Settings*`,
  },
  {
    html: `<p data-lines="1" data-type="p" data-sign="474cbd516b486ab126565639d3ef20711"  style="padding:10px 0;"><code style="
    border-radius: 0.3em;
    white-space: normal;
    color: #f85353;
    background-color: #e5e5e5;">按钮</code></p>`,
    md: '`按钮`',
  },
  {
    html: `<p data-lines="1" data-type="p" data-sign="6aea73b3a483a2f0e6856bdac484cf1b1" style="padding:10px 0;"><code style="
    border-radius: 0.3em;
    white-space: normal;
    color: #f85353;
    background-color: #e5e5e5;">english | 中文</code></p>`,
    md: '`english | 中文`',
  },
  {
    html: `<div class="box-tip custom-block">
    <p data-lines="1" data-type="p" data-sign="12ae2a12586001e30745cb0457586ae31">Tip</p>
</div>`,
    md: `
\`\`\`boxTip
Tip
\`\`\``,
  },
  {
    html: `<div class="box-warn" style="">
    <p data-lines="1" data-type="p" data-sign="12ae2a12586001e30745cb0457586ae31">Tip</p>
</div>`,
    md: `
\`\`\`boxWarn
警示
\`\`\``,
  },
  {
    html: `<div class="box-danger">
    <p data-lines="1" data-type="p" data-sign="6267ab5a8a9912c72c8a3137edd195881">警示</p>
</div>`,
    md: `
\`\`\`boxDanger
警告
\`\`\``,
  },
  {
    html: `<div style="padding:10px 0;">表格</div>`,
    md: `指标|含义
-|-
Average (mm)|平均瞳孔直径`,
  },
  {
    html: `<div style="padding:10px 0;">标题允许空隔</div>`,
    md: `[链接允许空格](doclink_1 "https://cdn.ergolab.cn#测试 数据")`,
  },
  {
    html: `<section class="icon-download block bg-color"><a href="javascript:void()" download="kingfar" class="icon-download-alink"><svg class="icon w-4 h-4" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"></path></g></svg>下载</a></section>`,
    md: `[下载](link_3 "url")`,
  },
];
