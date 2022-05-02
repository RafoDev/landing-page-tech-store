'use strict'



const nav = () => {

  const navToggle = document.getElementById('header-nav__menu-icon-label-close');

  console.log(navToggle);

  navToggle.addEventListener('click', () => {

    const menuLinkList = document.querySelector('.header-nav__menu-link-list');

    menuLinkList.classList.toggle('header-nav__menu-link-list-show');

    navToggle.classList.toggle('header-nav__menu-icon-label-close-show');

  });

}

export default nav;