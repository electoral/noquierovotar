// Variable to hold request
var request;
/*
// Bind to the submit event of our form
$("#form-will-vote").submit(function(event) {

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "http://edutrul.createsend.com/t/i/s/tlqe/",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

// Bind to the submit event of our form
$("#form-wont-vote").submit(function(event) {

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "http://edutrul.createsend.com/t/i/s/tlqe/",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
*/

$(".button-yes").click(function() {
  $(".result").addClass('display-result');
  $(".form-yes").addClass('display-form');
  $(".form-no").removeClass('display-form');
  $(".consequences").hide();
});

$(".button-no").click(function() {
  $(".result").addClass('display-result');
  $(".form-no").addClass('display-form');
  $(".form-yes").removeClass('display-form');
  $(".consequences").show();
});

$('.textfield-dni').keyup(function () {
      this.value = this.value.replace(/[^0-9\.]/g,''); // < cualquier nÃºmero.
      jQuery(this).val(this.value.substr(0, 8)); // < hasta 8 caracteres.
      if (this.value.length == 8) {
         jQuery(".form-submit" ).prop("disabled", false);
         jQuery('.ruc-error-message').remove();
      }
      else if (this.value.length > 0) {
        jQuery(".form-submit" ).prop("disabled", true);
        if (!jQuery('.ruc-error-message').length) {
          jQuery('<div class="ruc-error-message"> ' + Drupal.t('The RUC must be 11 digits.') + '</div>').insertAfter('#edit-ruc');
        }
      }
      if (jQuery('.ruc-error-message').length && this.value.length == 0) {
          jQuery('.ruc-error-message').remove();
      }

  });
    
$('.textfield-dni').keyup(function () {
      this.value = this.value.replace(/[^0-9\.]/g,''); // < cualquier nÃºmero.
      jQuery(this).val(this.value.substr(0, 8)); // < hasta 8 caracteres.
      if (this.value.length == 8) {
         jQuery(".form-submit" ).prop("disabled", false);
         jQuery('.ruc-error-message').remove();
      }
      else if (this.value.length > 0) {
        jQuery(".form-submit" ).prop("disabled", true);
        if (!jQuery('.ruc-error-message').length) {
          jQuery('<div class="ruc-error-message"> ' + Drupal.t('The RUC must be 11 digits.') + '</div>').insertAfter('#edit-ruc');
        }
      }
      if (jQuery('.ruc-error-message').length && this.value.length == 0) {
          jQuery('.ruc-error-message').remove();
      }

  });
    
$('.textfield-dni').keyup(function () {
      this.value = this.value.replace(/[^0-9\.]/g,''); // < cualquier nÃºmero.
      jQuery(this).val(this.value.substr(0, 8)); // < hasta 8 caracteres.
      if (this.value.length == 8) {
         jQuery(".form-submit" ).prop("disabled", false);
         jQuery('.ruc-error-message').remove();
      }
      else if (this.value.length > 0) {
        jQuery(".form-submit" ).prop("disabled", true);
        if (!jQuery('.ruc-error-message').length) {
          jQuery('<div class="ruc-error-message"> ' + Drupal.t('The RUC must be 11 digits.') + '</div>').insertAfter('#edit-ruc');
        }
      }
      if (jQuery('.ruc-error-message').length && this.value.length == 0) {
          jQuery('.ruc-error-message').remove();
      }

  });
    
$('.textfield-dni').keyup(function () {
      this.value = this.value.replace(/[^0-9\.]/g,''); // < cualquier nÃºmero.
      jQuery(this).val(this.value.substr(0, 8)); // < hasta 8 caracteres.
      if (this.value.length == 8) {
         jQuery(".form-submit" ).prop("disabled", false);
         jQuery('.ruc-error-message').remove();
      }
      else if (this.value.length > 0) {
        jQuery(".form-submit" ).prop("disabled", true);
        if (!jQuery('.ruc-error-message').length) {
          jQuery('<div class="ruc-error-message"> ' + Drupal.t('The RUC must be 11 digits.') + '</div>').insertAfter('#edit-ruc');
        }
      }
      if (jQuery('.ruc-error-message').length && this.value.length == 0) {
          jQuery('.ruc-error-message').remove();
      }

  });
    
$('.textfield-dni').keyup(function () {
  this.value = this.value.replace(/[^0-9\.]/g,''); // < cualquier nÃºmero.
  $(this).val(this.value.substr(0, 8)); // < hasta 8 caracteres.
  if (this.value.length == 8) {
     $(".form-submit" ).prop("disabled", false);
     $('.ruc-error-message').remove();
  }
  else if (this.value.length > 0) {
    $(".form-submit" ).prop("disabled", true);
    if (!$('.ruc-error-message').length) {
      $('<div class="ruc-error-message"> ' + Drupal.t('The RUC must be 11 digits.') + '</div>').insertAfter('#edit-ruc');
    }
  }
  if ($('.ruc-error-message').length && this.value.length == 0) {
    $('.ruc-error-message').remove();
  }

});
