var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
// options
itemSelector: '.grid-item',
gutter: '.gutter-sizer',
horizontalOrder: true,
fitWidth: true,
columnWidth: 270
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});

const SLIDER = new Siema({
  onInit: () => {
    createNav();
    setActiveButton();
  },
  onChange: setActiveButton,
  perPage: 1
});

function createNav(){
  let sliderWrap = document.querySelector('.member-wrap');
  let slides = document.querySelectorAll('.member');

  let nav = document.createElement('div');
  nav.className = 'slider-nav';
  slides.forEach((s, i) => {
    let button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => {
      SLIDER.goTo(i);
    });
    nav.appendChild(button);
  });

  sliderWrap.appendChild(nav);
}

function createNav(){
  let sliderWrap = document.querySelector('.testimonial-wrap');
  let slides = document.querySelectorAll('.testimonial-slide');

  let nav = document.createElement('div');
  nav.className = 'slider-nav';
  slides.forEach((s, i) => {
    let button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => {
      SLIDER.goTo(i);
    });
    nav.appendChild(button);
  });

  sliderWrap.appendChild(nav);
}

function setActiveButton(){
  let buttons = document.querySelectorAll('.slider-nav button');
  buttons.forEach((b, i) => {
    if (i == this.currentSlide) {
      b.className = "active-slider";
    } else {
      b.className = "";
    }
  });
};
