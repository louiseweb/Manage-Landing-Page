const openBtn =  document.querySelector('#open-btn');
const closeBtn =  document.querySelector('#close-btn');
const nav =  document.querySelector('#nav');

openBtn.addEventListener('click', function(){
    openBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');
    nav.classList.remove('d-none');
});

closeBtn.addEventListener('click', function(){
    closeBtn.classList.add('d-none');
    openBtn.classList.remove('d-none');
    nav.classList.add('d-none');
});