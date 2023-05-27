/*-----Show and Hide Menu (Mobile)-----*/

const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

//Show menu
if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.toggle('show-menu');
    })
} 

// Hide menu
if (navClose) {
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu');
    })
}


/*------Remove Menu (Mobile)-----*/

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(function(e){
    e.addEventListener('click', linkAction);
})