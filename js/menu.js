let content_menu_mobile = document.getElementById('content_menu_mobile'),
  menu_overlay = document.getElementById('menu_overlay'),
  btn_menu_mobile = document.getElementById('btn_menu_mobile'),
  btn_menu_close_mobile = document.getElementById('btn_menu_close_mobile'),
  option_menu_moblies = [...document.getElementsByClassName('option_menu_moblie')],
  link_logo_social_menus = [...document.getElementsByClassName('link_logo_social_menu')];

let toggleMenuContent = () => {
  content_menu_mobile.classList.toggle('active');
  menu_overlay.classList.toggle('active');
};

btn_menu_mobile.addEventListener('click', () => toggleMenuContent());

menu_overlay.addEventListener('click', () => toggleMenuContent());

btn_menu_close_mobile.addEventListener('click', () => toggleMenuContent());

option_menu_moblies.map((ele) => ele.addEventListener('click', () => toggleMenuContent()));

link_logo_social_menus.map((ele) => ele.addEventListener('click', () => {
  content_menu_mobile.classList.remove('active');
  menu_overlay.classList.remove('active');
}));

let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  if (currentWidth !== lastWidth) {
    content_menu_mobile.classList.remove('active');
    menu_overlay.classList.remove('active');
    lastWidth = currentWidth;
  }
});