new Splide( '.splide.splide-mobile', {
  type   : 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
} ).mount();

new Splide( '.splide.splide-desktop', {
  type   : 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
} ).mount();

//efeito visual para o topo
window.onscroll = function() {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  window.scrollY > sticky ? 
  header.classList.add("scroll-on") :  
  header.classList.remove("scroll-on");
};