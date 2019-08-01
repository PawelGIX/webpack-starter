import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const jqueryValidation = require('jquery-validation');



// polish letters added to jquery validation
jQuery.validator.addMethod('lettersOnly', function(value, element) {
    return this.optional(element) || /^[a-z A-ZąĄęĘżŻźŹćĆńŃŚśłŁóÓ\-]+$/i.test(value);
}, 'Dozwolone są tylko litery');

// polish letters added to jquery validation
jQuery.validator.addMethod('fullName', function(value, element) {
    return this.optional(element) || /^[a-z A-ZąĄęĘżŻźŹćĆńŃŚśłŁóÓ\-]+ [a-z A-ZąĄęĘżŻźŹćĆńŃŚśłŁóÓ\-]+$/i.test(value);
}, 'Podaj poprawnie "Imię i Nazwisko"');

// phone polish validatior
jQuery.validator.addMethod('phonePL', function(phone_number, element) {
    // phone_number = phone_number.replace(/\s+/g, '');
    return this.optional(element) || phone_number.length === 9;
}, 'Podaj poprawny "Numer telefonu"');

// kod pocztowy
jQuery.validator.addMethod("kodpocztowy", function(value, element) {
  return this.optional(element) || /^\d{2}-\d{3}$/.test(value);
}, "Wprowadź poprawny \"Kod pocztowy\"");


// NIP validatior
jQuery.validator.addMethod('nip', function(value, element) {

    function validatenip(nip) {
        var nip_bez_kresek = nip.replace(/-/g,"");
        var reg = /^[0-9]{10}$/;
        if(reg.test(nip_bez_kresek) == false) {
            return false;
        }
        else
        {
            var dig = (""+nip_bez_kresek).split("");
            var kontrola = (6*parseInt(dig[0]) + 5*parseInt(dig[1]) + 7*parseInt(dig[2]) + 2*parseInt(dig[3]) + 3*parseInt(dig[4]) + 4*parseInt(dig[5]) + 5*parseInt(dig[6]) + 6*parseInt(dig[7]) + 7*parseInt(dig[8]))%11;
            if(parseInt(dig[9])==kontrola)
            return true;
            else
            return false;
        }

    }

    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }

    var isChecksumOK = validatenip(value);
    var disallow = ["1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "0000000000"];
    var isDisallowed = isInArray(value, disallow);

    var response = !isDisallowed && isChecksumOK;

	return this.optional(element) || response;

}, 'Proszę o podanie prawidłowego "numeru NIP".');





// Validators in js/validators.js

$('#contactForm').validate({
    ignore: ':hidden:not(:checkbox)',
    rules: {
        fullName: {
            required: true,
            fullName: true
        },
        email: {
            required: true,
            email: true
        },
        // client_nip: {
        //     required: true,
        //     nip: true
        // },
        phone: {
            required: true,
            phonePL: true,
            digits: true,
            // remote: {
            //     url: "js/check-phone.php",
            //     type: "post",
            //     data: {
            //       client_mobile: function() {
            //          return $("#phone_no").val();
            //       }
            //     }
            // }
        },
        nip: {
            required: true,
            digits: true,
            nip: true,
        },
        agree1: {
            required: true
        },
        agreed_regulamin: {
            required: true
        }
    },
    invalidHandler: function(event, validator) {
        // 'this' refers to the form
        // console.log(event, validator);
        var errors = validator.numberOfInvalids();
        var errorList = validator.errorList;
        // var message = "Wprowadź proszę poprawne dane<br><ul>";
        var message = "<ul>";
          // + this.numberOfInvalids()

        for (var i = 0; i < errorList.length; i++) {
            var field = errorList[i];
            message += '<li>' + field.message + '</li>';
        };
        message += '</ul>';
        Swal.fire({
            title: "Wprowadź poprawne dane",
            // text: message,
            html: message,
            type: "error",
            buttonsStyling: false,
            confirmButtonClass: 'button'
        });

    },
    submitHandler: function(form) {
        // acceptNavigation();

        $.post($('#contactForm').attr('action'), $(form).serialize()).then(data =>{
            console.log(data);
            $("#formContent").hide();
            $("#thxContent").show();

            $(window).trigger('resize');
            $(window).trigger('scroll');
        });
        // debugger;
        // form.preventDefault();

        // form.submit();
    },
    messages: {
        client_name_all: {
            required: "Wypełnij pole \"Imię i nazwisko\"",
            fullName: "Podaj poprawnie \"Imię i nazwisko\""
        },
        client_surname: {
            required: "Wypełnij pole \"Nazwisko\"",
            minlength: "Pole \"Nazwisko\" powinno zawierać minimum 2 znaki",
            letersOnly: "Pole \"Nazwisko\" powinno zawierać tylko litery"
        },
        email: {
            required: "Podaj prawidłowy adres \"E-mail\"",
            email: "Podaj poprawny adres \"E-mail\""
        },
        phone: {
            required: "Podaj \"Numer telefonu\"",
            phonePL: "Podaj poprawny \"Numer telefonu\"",
            digits: "Pole \"Numer telefonu\" może zawierac tylko liczby.",
            remote: "Podany numer telefonu już istnieje"
        },
        nip: {
            required: "Podaj \"NIP firmy\"",
            digits: "Pole \"NIP\" może zawierac tylko liczby.",
            nip: "Podany NIP jest nieprawidłowy",
            wrongnip: "Podany NIP jest nieprawidłowy"
        },
        // client_code: {
        //     required: "Podaj poprawny \"Kod pocztowy\"",
        //     kodpocztowy: "Podaj poprawny \"Kod pocztowy\"",
        //     znajdzkodpocztowy: "Podany \"Kod pocztowy\" nie istnieje"
        // },


        agree1: {
            required: "Wyraź zgodę na przetwarzanie danych osobowych"
        },
        agreed_regulamin: {
            required: "Zapoznaj się z regulaminem"
        }
    },
    highlight: function(element) {
        $(element).addClass('error');
        // $(element).next('span').addClass('error-checkbox');
    },
    unhighlight: function(element) {
        $(element).removeClass('error');
        // $(element).next('span').removeClass('error-checkbox');
    },
    errorPlacement: function(error, element) {}

});