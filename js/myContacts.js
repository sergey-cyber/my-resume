//Вылет контактов
const contacstItem = document.querySelectorAll('.myContacts__icons__item');
window.addEventListener('hashchange', (e) => {  
    if(window.location.hash === '#hindi') {
        for(i=0; i<contacstItem.length; i++) {
            contacstItem[i].classList.add('animation');
        }
    } else {
        for(i=0; i<contacstItem.length; i++) {
            contacstItem[i].classList.remove('animation');
        }
    }
});