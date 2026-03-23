import '../scss/style.scss'

// Открывает и закрывает бургер меню
const menu = document.querySelector('.left-menu')
const openBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.left-menu-remove')

openBtn.addEventListener('click', () => {
  menu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active')
})

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
  const blocks = document.querySelectorAll('.block');
const collapsedHeight = 160;

blocks.forEach(block => {
  const button = block.querySelector('.buttonShowMore');
  const container = block.querySelector('.grid, .repair');

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
      button.textContent = 'Показать все';
    }
    isOpen = !isOpen;
  });

  updateLayout();
  window.addEventListener('resize', updateLayout);
});