/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$("a.govuk-back-link").click(function(){
  parent.history.back();
  return false;
});


jQuery(document).ready(function($) {
  $('.resume') .hide()
$('a[href^="#"]').on('click', function(event) {
$('.resume') .hide()
    var target = $(this).attr('href');

    $('.resume'+target).toggle();

});
});


$(document).ready(function() {
    $("#my-form").submit(function(e) {
        e.preventDefault();
        var scoreCounter = 0, newPage;
        $('input[type=radio]').each(function () {
            if ($(this).prop('checked')) { scoreCounter += parseInt($(this).val()); }
        });
        if (scoreCounter < 1) { newPage = "email.html"; }
        else if (scoreCounter <=2)  { newPage = "mobile-number.html"; }
        else if (scoreCounter <= 3) { newPage = "reg-number.html"; }
        else { newPage = "mobile-number"; }

        window.location = newPage;
    });
});
