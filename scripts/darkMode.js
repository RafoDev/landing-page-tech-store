'use strict';

// const documentReady = () => {
  const btnSwitch = document.querySelector(".header-nav__menu-switch");
  const infoDescription = document.querySelector(".cover__info-description");

  btnSwitch.addEventListener('click', () => {
    console.log('Modo oscuro activo');
    document.body.classList.toggle('body-dark');
    btnSwitch.classList.toggle('active');
  
    if(document.body.classList.contains('body-dark')){
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
  });

  if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('body-dark');
    btnSwitch.classList.add('active');
  } else {
    document.body.classList.remove('body-dark');
    btnSwitch.classList.remove('active');
  }
