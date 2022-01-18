// document.querySelectorAll('a.yakor').array.forEach(link => {
//   link.addEventListener('click', function name(e) {
//     e.preventDefault();

//     const href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const top0ffset = 0;

//     const elementPosition = scrollTarget.getBoundingClientRect().top;

//     const offsetPosition = elementPosition - top0ffset;

//     window.scrollBy;
//     ({
//       top: offsetPosition,
//       behavior: 'smooth',
//     });
//   });
// });
$(document).ready(function () {
  $('a.scrollto').click(function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 800);
    return false;
  });
});
