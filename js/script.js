
// const items = document.querySelectorAll(".crew__accordeon-item");

// for (let i=0; i<items.length; i++) {
//     items[i].addEventListener('click', function(e) {
//         let target = getCurrentZone(e.target);
//         console.log(items[i]);
//         if (items[i].classList.contains('crew__accordeon-item__active')) {
//             items[i].classList.remove('crew__accordeon-item__active');
//          };
       
//         target.classList.add('crew__accordeon-item__active');
        
//     });
// };

const list = document.querySelector('.crew__accordeon-list');
const items = document.querySelectorAll(".crew__accordeon-item");

list.addEventListener('click', function(e){
    const target = getCurrentZone(e.target, 'crew__accordeon-item');
    for (let i=0; i<items.length; i++) { 
        if (items[i].classList.contains('crew__accordeon-item__active') &&  !target.classList.contains('crew__accordeon-item__active')) {
            items[i].classList.remove('crew__accordeon-item__active');
        }        
    }
    if (target.classList.contains('crew__accordeon-item')) {
        target.classList.toggle('crew__accordeon-item__active');
    }
    
});


const main = document.querySelector(".menu__accordeon");
const childs = document.querySelectorAll(".menu__accordeon-list");

main.addEventListener('click', function(event){
    const target = getCurrentZone(event.target, 'menu__accordeon-list');
    const title = document.querySelector(".section__menu-title");
    let inProcess;
    for (let i=0; i<childs.length; i++) { 
        if (childs[i].classList.contains('menu__accordeon-hidden__active') &&  !target.classList.contains('menu__accordeon-hidden__active')) {
            childs[i].classList.remove('menu__accordeon-hidden__active');
        }  
        if (childs[i].classList.contains('menu__accordeon-hidden__active')){
            inProcess = 1;
        } 
       
    }
    if (target.classList.contains('menu__accordeon-list')) {
        target.classList.toggle('menu__accordeon-hidden__active');
    }

    if (inProcess == 1){
        title.classList.remove('section__menu-title__none');
    } else {
        title.classList.add('section__menu-title__none');
    }

});

function getCurrentZone(from, to) {
    do {
        if (from.classList.contains(to)) {
            return from;
        }
    } while (from = from.parentElement);

    return null;
};


//всплывающее окно в отзывах

const openbutton = document.querySelectorAll('.reviews__popup__link');


function getText (attr) {

    const reviewItem = document.getElementById(attr);
    const h2title = reviewItem.querySelector('.reviews__popup__h2_title');
    const contenttitle = h2title.textContent;
    const descrRev = reviewItem.querySelector('.reviews__popup__descr');
    const contendescr = descrRev.textContent;
    return {
        title:contenttitle,
        descr:contendescr
    }
};

function openOverlay (obj) {
    const overlayElement= document.createElement('div');
    overlayElement.classList.add('overlay');

    const containerElement= document.createElement('div');
    containerElement.classList.add('containers');

    const titleElement= document.createElement('div');
    titleElement.classList.add('titleover');
    titleElement.textContent= obj.title;
    

   
    const contentElement= document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent=obj.descr;


    const closeElement= document.createElement('a');
    closeElement.classList.add('close');
    closeElement.href = '#review';
    closeElement.textContent = 'x';
    closeElement.addEventListener('click', function(){
        document.body.removeChild(overlayElement);
    });
    
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);

    
    return overlayElement;
}
let overlay;
for (let i=0; i<openbutton.length; i++) {
openbutton[i].addEventListener('click', function(){

    const att = openbutton[i].dataset.attr;
    const result = getText (att);
    overlay = openOverlay(result);

    document.body.appendChild(overlay);
});

};

//слайдер

$('.food-menu__wrap').slick({
    prevArrow: '<div class="food-menu__arrowscroll-left"> <img class="arrowscroll-left__img" src="/img/content/arrowscroll.png" alt="arrowscroll"></div>',
    nextArrow: '<div class="food-menu__arrowscroll-righ"><img class="arrowscroll-right__img" src="/img/content/arrowscroll.png" alt="arrowscroll"></div>'
});

