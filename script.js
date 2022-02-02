'use strict';

// hamburger menu 
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
})

document.querySelectorAll('.menu__link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuList.classList.remove('active');
}))

// hamburger menu -- END

// cards 

const cards = document.getElementById("cards");
cards.addEventListener('click', event => { showCard(event) })

function showCard(event) {
    const card = event.target.closest('.card');
    const desc = card.children.item(3); 
    if (desc.style.display == '') { 
        desc.style.display = 'block';
    } else {
        if(desc.style.display != 'none'){
            desc.style.display = 'none';
        }
        else{
            desc.style.display = 'block';
        }
    }
}

// cards -- END 
