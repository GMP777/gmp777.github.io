<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="footer.css" />

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

| 工具 | 版本 | 更新日期 |
| --- | --- | --- |
| 💎钻石计算器 | [v.1.0版本](https://gmp777.github.io/jsq1.html) ||
| |[v.2.0版本](https://gmp777.github.io/jsq2.html) ||
| 🥤888钻石消耗多少道具 | [v.0.0版本](https://gmp777.github.io/888.html) |  |
| 🏆抽奖所需钻石计算 | [v.0.0版本](https://gmp777.github.io/roll.html) |  |
| 🪶翅膀进阶器 | [v.1.0版本](https://gmp777.github.io/jsq3.html) | 更新：2025-06-05 15:01:10 |
| ☯️道装合成器 | [v.1.0版本](https://gmp777.github.io/jsq4.html) | 更新：2025-06-05 23:32:07 |
| 🪙元宝商城计算器 | [v.0.0版本](https://gmp777.github.io/shop.html) | 更新：2025-06-05 15:28:15 |
| 💎宝石合成器 | [v.0.0版本](https://gmp777.github.io/jsq5.html) | 更新：2025-06-05 23:31:46 |
| 🔥天命神装合成器 | [v.1.0版本](https://gmp777.github.io/jsq6.html) |更新：2025-06-06 00:28:25|
