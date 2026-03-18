import '../scss/style.scss'

const menu = document.querySelector('.left-menu')
const openBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.left-menu-remove')

openBtn.addEventListener('click', () => {
  menu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active')
})




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