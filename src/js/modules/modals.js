const modals = ()=> {
function bindModal(triggerSeletor, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSeletor),
          modal=document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);  

trigger.forEach(item=> {
    item.addEventListener('click', (e)=> {
        if(e.target) {
            e.preventDefault();
        }
        modal.style.display='block';
        document.body.style.overflow='hidden';
        // document.body.classList.add('modal-open');
    });
});

close.addEventListener('click',() => {
    // document.body.classList.remove('modal-open');
    modal.style.display='none';

    document.body.style.overflow='';
});

modal.addEventListener('click', (e)=> {
    if(e.target===modal) {
        document.body.style.overflow='';
        modal.style.display='none';

        // document.body.classList.remove('modal-open');
    }
});


}

function showModalByTime(selector,time) {
    setTimeout(()=> {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow='hidden';


    },time);
}
bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
bindModal('.phone_link', '.popup', '.popup .popup_close');
// showModalByTime('.popup', 3000);
};
export default modals;