let content_menu_mobile = document.getElementById('content_menu_mobile'),
    btn_menu_mobile = document.getElementById('btn_menu_mobile'),
    btn_menu_close_mobile = document.getElementById('btn_menu_close_mobile'),
    option_menu_moblies = [...document.getElementsByClassName('option_menu_moblie')],
    link_logo_social_menus = [...document.getElementsByClassName('link_logo_social_menu')];

let toggleMenuContent = () => { content_menu_mobile.classList.toggle('active') };

btn_menu_mobile.addEventListener('click', () => toggleMenuContent()
);

btn_menu_close_mobile.addEventListener('click', () => toggleMenuContent()
);

option_menu_moblies.map((ele) => ele.addEventListener('click', () => toggleMenuContent()));

link_logo_social_menus.map((ele) => ele.addEventListener('click', () => toggleMenuContent()));

window.addEventListener('resize', () => content_menu_mobile.classList.remove('active'))