```html
<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="footer.css" />
```

```html
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
```

# 隐藏当前页面链接

```html
<!-- footer -->
<footer id="footer">加载中...</footer>

<!-- 脚本：加载footer.html并隐藏当前页对应链接 -->
<script>
  const footer = document.getElementById('footer');
  fetch('footer.html')
    .then(res => {
      if (!res.ok) throw new Error('加载 footer 失败');
      return res.text();
    })
    .then(html => {
      footer.innerHTML = html;

      const currentPath = window.location.pathname.replace(/\/+$/, '');
      const links = footer.querySelectorAll('a');

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');

        if (linkPath === currentPath) {
          link.style.display = 'none';  // 隐藏当前页面对应链接
        }
      });
    })
    .catch(err => {
      footer.textContent = '加载 footer 内容失败：' + err.message;
    });
</script>
<!-- footer -->
```
