const navbar = document.getElementById('navbar')
const nav_menu = document.querySelector('.nav_menu')
const menu_btn = document.querySelector('.menu_btn')
const imgMenu = document.querySelector('.menu')
const imgClose = document.querySelector('.close')

menu_btn.addEventListener('click', ()=> {
    imgMenu.classList.toggle('hidden')
    imgClose.classList.toggle('hidden')
    nav_menu.classList.toggle('hidden')
})

const likeBtn = document.querySelectorAll('#like')
likeBtn[0].addEventListener('click', ()=> {
    likeBtn[0].classList.toggle('like')
})

likeBtn[1].addEventListener('click', ()=> {
    likeBtn[1].classList.toggle('like')
})

likeBtn[2].addEventListener('click', ()=> {
    likeBtn[2].classList.toggle('like')
})