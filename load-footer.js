// 获取 footer 文件路径
function getFooterFile() {
  const path = window.location.pathname;
  if (path.includes('/y/')) {
    return '/y/footer.html';
  } else if (path.includes('/q/')) {
    return '/q/footer.html';
  } else {
    return '/footer.html'; // 根目录默认 footer
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

// 加载 footer 内容
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
