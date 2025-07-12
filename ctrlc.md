在mate代码后

# css

```html
<!-- 载入 footer 样式 -->
<link rel="stylesheet" href="footer.css" />
<!-- 载入 footer 样式 -->
```
-----

在JS代码后，body代码前

# v.6.0

```html
<!-- footer -->
<footer id="footer-container">加载中...</footer>

<script>
  // 根据路径选择 footer 文件
  function getFooterFile() {
    const path = window.location.pathname;

    if (path.includes('/y/')) {
      return '/y/footer.html';
    } else if (path.includes('/q/')) {
      return '/q/footer.html';
    } else {
      return '/footer.html'; // 根目录下的默认 footer
    }
  }

  // 隐藏当前页面对应的链接
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

  const footerFile = getFooterFile();

  fetch(footerFile)
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
```

# v.5.0

```html
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
```

# v.4.0

```html
  <!-- footer-->
 <footer id="footer-container">加载中...</footer>

  <script>
    function hideCurrentPageLinkText() {
      const currentPath = window.location.pathname.replace(/\/+$/, '');
      const links = document.querySelectorAll('.footer-content a');

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');
        if (linkPath === currentPath) {
          link.textContent = '';
        }
      });
    }

    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('footer-container');
        container.innerHTML = html;

        hideCurrentPageLinkText();
      })
      .catch(() => {
        document.getElementById('footer-container').textContent = '加载 footer 失败';
      });
  </script>
  <!-- footer -->
  ```

# v.3.0

```html
  <!-- footer-->
  <footer id="footer-container">加载中...</footer>

  <script>
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('footer-container');
        container.innerHTML = html;

        // 调用 footer.html 中定义的函数隐藏当前页链接文字
        if (typeof hideCurrentPageLinkText === 'function') {
          hideCurrentPageLinkText();
        }
      })
      .catch(() => {
        document.getElementById('footer-container').textContent = '加载 footer 失败';
      });
  </script>
  <!-- footer -->
```

# v.2.0

```html
<!-- 载入 footer-->
<div id="footer-container">加载中...</div>
<script>
  fetch('footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('footer-container').textContent = '加载 footer 失败';
    });
</script>
<!-- 载入 footer-->
```

# v.0.0

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

# v.1.0.隐藏当前页面链接

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
