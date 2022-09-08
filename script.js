const openBtn =  document.querySelector('#open-btn');
const closeBtn =  document.querySelector('#close-btn');
const nav =  document.querySelector('#nav');
const menuOverlay = document.querySelector('#menu-overlay');

openBtn.addEventListener('click', function(){
    openBtn.classList.toggle('d-none');
    closeBtn.classList.toggle('d-none');
    nav.classList.toggle('d-none');
    menuOverlay.classList.toggle('d-none');
});

closeBtn.addEventListener('click', function(){
    closeBtn.classList.toggle('d-none');
    openBtn.classList.toggle('d-none');
    nav.classList.toggle('d-none');
    menuOverlay.classList.toggle('d-none');
});