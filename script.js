// Tambahkan efek keluar saat navigasi diklik
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = this.href;
    }, 400); // sesuai dengan CSS transition
  });
});
