<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="footer.css" />

自己常用到的功能让Ai帮忙整了个网页工具，如果出现问题请怀疑是代码的问题。时不时让Ai维修两下……

|悠久传奇| 版本 | 最新更新日期 |
| --- | --- | --- |
|📖简阅攻略|<a href="https://gmp777.github.io/go.html" target="_blank">v.0.0</a>|2025-06-05|
| 💎钻石计算器 | <a href="https://gmp777.github.io/jsq1.html" target="_blank">v.1.5</a>|2025-06-08 15:12:12|
|💎钻石计算器|<a href="https://gmp777.github.io/jsq2.html" target="_blank">v.2.0</a> |2025-06-04|
| 🥤888钻石消耗多少道具 | <a href="https://gmp777.github.io/888.html" target="_blank">v.0.0</a> | 2025-06-04 |
| 🏆抽奖所需钻石计算 | <a href="https://gmp777.github.io/roll.html" target="_blank">v.0.0</a> | 2025-06-04 |
| 🪶翅膀进阶器 | <a href="https://gmp777.github.io/cb.html" target="_blank">v.2.0</a> |2025-06-06 15:28:21|
| ☯️道装合成器 | <a href="https://gmp777.github.io/jsq4.html" target="_blank">v.2.0</a> | 2025-06-05 23:32:07 |
| 🪙元宝商城计算器 | <a href="https://gmp777.github.io/shop.html" target="_blank">v.0.0</a> |2025-06-05 15:28:15 |
| 💎宝石合成器 | <a href="https://gmp777.github.io/jsq5.html" target="_blank">v.1.0</a> |2025-06-05 23:31:46 |
| 🔥天命神装合成器 | <a href="https://gmp777.github.io/tm.html" target="_blank">v.2.0</a> |2025-06-06 21:14:49|
|🐉十二生肖装备合成器| <a href="https://gmp777.github.io/12.html" target="_blank">v.1.0</a> |2025-06-06 01:07:12 |
|🔧footer自动载入链接|v.5.0|2025-06-07 03:06:34|

<!-- footer -->
<footer id="footer-container">加载中...</footer>

  <script>
    // 隐藏当前页面对应的链接整个元素（不留空白）
    function hideCurrentPageLink() {
      const currentPath = window.location.pathname.replace(/\/+$/, '');
      const links = document.querySelectorAll('.footer-content a');

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');
        if (linkPath === currentPath) {
          link.style.display = 'none';
        }
      });
    }

    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('footer-container');
        container.innerHTML = html;

        hideCurrentPageLink();
      })
      .catch(() => {
        document.getElementById('footer-container').textContent = '加载 footer 失败';
      });
  </script>
<!-- footer -->
