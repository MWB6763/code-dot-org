import $ from 'jquery';

$(document).ready(function() {
  $('#user_terms_of_service_version').on('change', function(event) {
    if ($(this).is(':checked')) {
      $('#accept-terms-submit')
        .prop('disabled', false)
        .removeClass('disabled-button');
    } else {
      $('#accept-terms-submit')
        .prop('disabled', true)
        .addClass('disabled-button');
    }
  });

  $('#edit_user').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: 'json',
      complete: function(data) {
        $('#implicit-terms-modal').modal('hide');
        location.reload();
      }
    });
  });

  $('#later-link').click(function() {
    $('#implicit-terms-modal').modal('hide');
  });
});

$(document).ready(function() {
  var printLink = $('#print-terms');
  if (printLink) {
    printLink.click(function() {
      var item = $('#print-frame')[0];
      item.contentWindow.print();
    });
  }
});

function setCookie(key, value) {
  var expires = new Date();
  // Kill hide_tos cookie at midnight every night
  // so the terms interstitial pops up once a day.
  expires.setHours(23, 59, 59, 0);
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

$(document).ready(function() {
  var already_shown = !!getCookie('hide_tos');
  if (!already_shown) {
    $('#implicit-terms-modal').modal('show');
    setCookie('hide_tos', '1');
  }
});
