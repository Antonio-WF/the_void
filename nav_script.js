// script.js
  fetch('navbar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('nav').innerHTML = html;
    });