<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>悠久传奇工具🔧</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="/footer.css" />
<!-- 载入 footer 样式 -->
  <style>
    body { font-family: sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 100%; margin-top: 20px; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background-color: #f4f4f4; }
    a { text-decoration: none; color: #007BFF; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <table id="tools-table">
    <thead>
      <tr>
        <th>功能</th>
        <th>版本</th>
        <th>最新更新日期</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <!-- 嵌入 JSON 数据 -->
  <script>
    const toolsData = [
      { name: "📖简阅攻略", url: "go.html", version: "v.0.0", date: "2025-06-05" },
      { name: "💪战力提升", url: "up.html", version: "v.1.0", date: "2025-07-25 01:50:46" },
      { name: "💎钻石计算器", url: "jsq1.html", version: "v.3.0", date: "2025-07-03 03:22:28" },
      { name: "💎钻石计算器", url: "jsq2.html", version: "v.2.0", date: "2025-06-04" },
      { name: "🥤888钻石消耗多少道具", url: "888.html", version: "v.0.0", date: "2025-06-04" },
      { name: "🏆抽奖所需钻石计算", url: "roll.html", version: "v.0.0", date: "2025-06-04" },
      { name: "🪶翅膀进阶器", url: "cb.html", version: "v.2.0", date: "2025-06-06 15:28:21" },
      { name: "☯️道装合成器", url: "jsq4.html", version: "v.2.0", date: "2025-06-05 23:32:07" },
      { name: "🪙元宝商城计算器", url: "shop.html", version: "v.0.0", date: "2025-06-05 15:28:15" },
      { name: "💎宝石合成器", url: "jsq5.html", version: "v.1.0", date: "2025-06-05 23:31:46" },
      { name: "🔥天命神装合成器", url: "tm.html", version: "v.2.0", date: "2025-06-06 21:14:49" },
      { name: "🐉十二生肖装备合成器", url: "12.html", version: "v.1.0", date: "2025-06-06 01:07:12" },
      { name: "🔧footer自动载入链接", url: "#", version: "v.5.0", date: "2025-06-07 03:06:34" },
      { name: "🔨强化元宝计算器", url: "qh.html", version: "v.0.0", date: "2025-06-10 01:10:46" },
      { name: "💰充值相关", url: "pay.html", version: "v.1.0", date: "2025-06-16 23:31:54" },
      { name: "👑VIP等级", url: "vip.html", version: "v.1.0", date: "2025-07-17 04:34:02" },
      { name: "👿Boss击杀", url: "boss.html", version: "v.1.0", date: "2025-07-17" },
      { name: "💴充值", url: "cz.html", version: "v.1.0", date: "2025-07-22" },
      { name: "⏰天界神炉", url: "tjsl.html", version: "v.1.0", date: "2025-07-25 01:26:29" },
      { name: "⚔️刷钻计算器", url: "s.html", version: "v.1.0", date: "2025-08-20 17:14:23" },
      { name: "🆕新服消息", url: "new.html", version: "v.1.0", date: "2025-07-18 02:26:34" },
      { name: "💎充值最优计算器", url: "zs.html", version: "v.1.0", date: "2025-08-30 00:43:27" },
      { name: "🧮侠客强化", url: "xk.html", version: "v.1.0", date: "2025-09-15 00:15:26" }
    ];

    const tbody = document.querySelector("#tools-table tbody");
    toolsData.forEach(tool => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${tool.name}</td>
        <td>${tool.url !== "#" ? `<a href="https://gmp777.github.io/y/${tool.url}" target="_blank">${tool.version}</a>` : tool.version}</td>
        <td>${tool.date}</td>
      `;
      tbody.appendChild(tr);
    });
  </script>

  <!-- Footer -->
  <div class="footer-wrapper">
    <footer id="footer-container">加载中...</footer>
  </div>
  <script src="/load-footer.js"></script>
<!-- footer -->

</body>
</html>
