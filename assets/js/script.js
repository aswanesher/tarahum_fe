/*====================
  Theme Setting Option Js
======================*/
let elements = document.querySelectorAll('.theme-icon');

elements.forEach(i => {
  i.addEventListener('click', function () {
    elements.forEach(j => j.classList.toggle('show'));
  });
});

/*document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('header-top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('header-top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});*/
