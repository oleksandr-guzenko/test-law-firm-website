// $('#mobile-btn-1').on('click', function (e) {
//   $('#address-items').toggleClass('d-none');
// });

// $('#mobile-btn-2').on('click', function(e) {
//   $('#menu-items').toggleClass('d-none');
// });

$('#mobile-btn-2').click(() => {
  // $('#menu-items').removeClass('d-none');
  $('#menu-items').slideToggle("2000")
})
$('#mobile-btn-1').click(() => {
  // $('#address-items').removeClass('d-none');
  $('#address-items').slideToggle("2000")
})