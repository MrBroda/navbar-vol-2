const navbar = document.querySelector('.nav')
const navMenu = document.querySelector('.nav__menu-links')
const navItem = document.querySelectorAll('.menu-link')
const navBtn = document.querySelector('.menu-btn')
const body = document.body

const handleNav = () => {
    navMenu.classList.toggle('active')
    navItem.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active')
			body.classList.remove('stop-scroll')
        })
    })
    stopScroll()
}

const stopScroll = () => {
    body.classList.toggle('stop-scroll')
}



navBtn.addEventListener('click', handleNav)