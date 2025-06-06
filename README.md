<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="footer.css" />

| 工具 | 版本 | 最新更新日期 |
| --- | --- | --- |
| 💎钻石计算器 | <a href="https://gmp777.github.io/jsq1.html" target="_blank">v.1.0版本</a>| 2025-06-04|
|💎钻石计算器|<a href="https://gmp777.github.io/jsq2.html" target="_blank">v.2.0版本</a> |2025-06-04|
| 🥤888钻石消耗多少道具 | <a href="https://gmp777.github.io/888.html" target="_blank">v.0.0版本</a> | 2025-06-04 |
| 🏆抽奖所需钻石计算 | <a href="https://gmp777.github.io/roll.html" target="_blank">v.0.0版本</a> | 2025-06-04 |
| 🪶翅膀进阶器 | <a href="https://gmp777.github.io/cb.html" target="_blank">v.1.0版本</a> |2025-06-05 15:01:10 |
| ☯️道装合成器 | <a href="https://gmp777.github.io/jsq4.html" target="_blank">v.2.0版本</a> | 2025-06-05 23:32:07 |
| 🪙元宝商城计算器 | <a href="https://gmp777.github.io/shop.html" target="_blank">v.0.0版本</a> |2025-06-05 15:28:15 |
| 💎宝石合成器 | <a href="https://gmp777.github.io/jsq5.html" target="_blank">v.1.0版本</a> |2025-06-05 23:31:46 |
| 🔥天命神装合成器 | <a href="https://gmp777.github.io/jsq6.html" target="_blank">v.1.0版本</a> | 2025-06-05 |
|🐉十二生肖装备合成器| <a href="https://gmp777.github.io/jsq7.html" target="_blank">v.0.0版本</a> |2025-06-06 01:07:12 |

<!-- footer 容器 -->
<footer id="footer">加载中...</footer>

<!-- 载入 footer.html 内容 -->
<script>
  const footer = document.getElementById('footer');
  fetch('footer.html')
    .then(res => {
      if (!res.ok) throw new Error('加载 footer 失败');
      return res.text();
    })
    .then(html => {
      footer.innerHTML = html;
    })
    .catch(err => {
      footer.textContent = '加载 footer 内容失败：' + err.message;
    });
</script>
