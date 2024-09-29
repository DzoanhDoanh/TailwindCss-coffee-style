const topMenu = document.querySelector('#ct-top-menu')
const toggleMenuIcon = document.querySelector('#ct-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if(toggleMenuIcon.contains(e.target)){
        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    }
    else{
        if(topMenu.classList.contains('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})