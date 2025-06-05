```html
<!-- 载入footer专用CSS -->
<link rel="stylesheet" href="footer.css" />
```

```html
<footer id="footer">加载中...</footer>  

<!-- 引入marked.js解析Markdown -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
  const footer = document.getElementById('footer');
  fetch('footer.md')
    .then(res => {
      if (!res.ok) throw new Error('加载Markdown失败');
      return res.text();
    })
    .then(md => {
      footer.innerHTML = marked.parse(md);
    })
    .catch(err => {
      footer.textContent = '加载footer内容失败：' + err.message;
    });
</script>
```
