window.onload = function() {  
    var btn_menu = document.querySelector('.btn-menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            var menu_items = document.querySelector('.menu-items') 
            menu_items.classList.toggle('show')
        }) 
    } 
}