const menu = document.querySelector('#hamburger-button')
const navbar = document.querySelector('.navbar')
const searchIcon = document.querySelector('#search-icon')
const searchForm = document.querySelector('.search-form')
const searchClose = document.querySelector('#close')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

searchIcon.onclick = () =>{
    searchForm.classList.toggle('active')
}
searchClose.onclick = () =>{
    searchForm.classList.remove('active')
}