//banner principal mobile
new Splide( '.splide.splide-mobile', {
  type   : 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
} ).mount();

//banner principal desktop
new Splide( '.splide.splide-desktop', {
  type   : 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
} ).mount();


// gallery dropdown
new Splide( '.splide.gallery-dropdown-splide', {
  type   : 'loop',
  perPage: 4,
  pagination: true,
  arrows: true,
  gap: 30,
  perMove: 1,
} ).mount();


//efeito visual para o topo
window.onscroll = function() {
  const header = document.getElementById("header");
  let sticky = header.offsetTop;

  window.scrollY > sticky ? 
  header.classList.add("scroll-on") :  
  header.classList.remove("scroll-on");
};


// Abrindo o menu por click
const menuItems = document.querySelectorAll(".header__menuitem");
const dropdownMenu = document.getElementById("dropdown-gallery");

// verifica cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      // impede que o evento atual se propague
      event.stopPropagation(); 
      dropdownMenu.style.display = 'flex';
  });

  document.addEventListener('click', function(event) {
    if (event.target !== menuItems && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
})