window.$ = window.jQuery

$('.test1').find('.child').addClass('red')

$('.test1').addClass('red')

let a = document.querySelectorAll('.test1')
console.log(a[0].querySelectorAll('.child'))