import '../scss/style.scss'

// Открывает и закрывает бургер меню
const menu = document.querySelector('.left-menu');
const openBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.left-menu-close');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Свайпер для брендов
document.addEventListener('DOMContentLoaded', () => {

  new Swiper('.swiper-brands', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.brands-pagination',
      clickable: true,
    },
  });

  new Swiper('#repairSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.repair-pagination',
      clickable: true,
    },
  });

});

  // Кнопка 'Показать все'
document.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const button = document.getElementById('buttonShowMore');
  const container = document.querySelector('.grid');
  
  const collapsedHeight = 160;
  let isOpen = false;

  function updateLayout() {

    if (window.innerWidth >= 768) {
      container.style.height = collapsedHeight + 'px';
      container.style.overflow = 'hidden';
      button.style.display = 'flex';
    } else {
      container.style.height = '';
      container.style.overflow = '';
      button.style.display = 'none';
    }
  }

  button.addEventListener('click', () => {
    if (!isOpen) {
      container.style.height = container.scrollHeight + 'px';
      button.textContent = 'Скрыть';
    } else {
      container.style.height = collapsedHeight + 'px';
      button.textContent = 'Показать всё';
    }
    isOpen = !isOpen;
  });

  updateLayout();
  window.addEventListener('resize', updateLayout);

});

const button = document.querySelector('.buttonShowMore');
const container = document.querySelector('.grid-repair');

const collapsedHeight = 160;
let isOpen = false;

// проверка экрана
function updateLayout() {
  if (window.innerWidth >= 768) {
    if (!isOpen) {
      container.style.maxHeight = collapsedHeight + 'px';
      container.style.overflow = 'hidden';
    }
    button.parentElement.style.display = 'flex';
  } else {
    container.style.maxHeight = '';
    container.style.overflow = '';
    button.parentElement.style.display = 'none';
  }
}

// клик по кнопке
button.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    container.style.maxHeight = container.scrollHeight + 'px';
    button.textContent = 'Скрыть';
  } else {
    container.style.maxHeight = collapsedHeight + 'px';
    button.textContent = 'Показать все';
  }
});

// запуск
updateLayout();
window.addEventListener('resize', updateLayout);