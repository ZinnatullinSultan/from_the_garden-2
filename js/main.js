const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
});

const swiperCard = new Swiper('.mySwiper', {
  on: {
    init: function () {
      this.mouseover();
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiperSeller = new Swiper('.mySwiper2', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const toggleButton = document.querySelector('.btn');
const cards = document.querySelectorAll('.card-hidden');

toggleButton.addEventListener('click', function () {
  cards.forEach((card) => {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  if (toggleButton.textContent === 'Показать ещё') {
    toggleButton.textContent = 'Скрыть';
  } else {
    toggleButton.textContent = 'Показать ещё';
  }
});
