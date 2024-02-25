const modals = ()=> {
function bindModal(triggerSeletor, modalSelector, closeSelector, closeClickOverlay= true) {
    const trigger = document.querySelectorAll(triggerSeletor),
          window=document.querySelectorAll('[data-modal]'),
          modal=document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          scroll=calcScroll();







trigger.forEach(item=> {
    item.addEventListener('click', (e)=> {
        if(e.target) {
            e.preventDefault();
        }
        window.forEach(item=> {
            item.style.display='none';

        });
        modal.style.display='block';
        document.body.style.overflow='hidden';
        document.body.style.marginRight=`${scroll}px`;
        // document.body.classList.add('modal-open');
    });
});

close.addEventListener('click',() => {
    // document.body.classList.remove('modal-open');
    modal.style.display='none';

    document.body.style.overflow='';
    document.body.style.marginRight=`0px`;

    window.forEach(item=> {
        item.style.display='none';

    });
});

modal.addEventListener('click', (e)=> {
    if(e.target===modal && closeClickOverlay) {
        document.body.style.overflow='';
        modal.style.display='none';
        document.body.style.marginRight=`0px`;

        window.forEach(item=> {
            item.style.display='none';

        });

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

function calcScroll (){
    let div =document.createElement('div');
    div.style.width='50px';
    div.style.height='50px';
    div.style.overflow='scroll';
    div.style.visibility='hidden';
document.body.appendChild(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();  

return scrollWidth; 
}

bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
bindModal('.phone_link', '.popup', '.popup .popup_close');
bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
// showModalByTime('.popup', 3000);
};
export default modals;