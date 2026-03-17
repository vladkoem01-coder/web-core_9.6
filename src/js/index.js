import '../scss/style.scss'

console.log('It works!')

const menu = document.querySelector('.left-menu')
const btn = document.querySelector('.burger')

btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})