const swiper = new Swiper('.swiper-container', {
  slidesPerView: 9,
  freeMode: true,
  breakpoints:{
    320: {
      slidesPerView: 1
    }
  }
});

const swiperCard = new Swiper('.mySwiper', {
  on: {
    init: function() {
      this.mouseover();
    },
  },
  pagination:{
    el: '.swiper-pagination',
  }
});