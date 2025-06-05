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
