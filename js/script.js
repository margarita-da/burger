
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
}




