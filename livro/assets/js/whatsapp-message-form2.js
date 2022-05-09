mobile = "244938165179";
openInNewWindow = "true";
title_form = "Mensagem enviada a partir do site";

input = "true";
inputs = [{
    id: 'name',
    label: 'Nome',
    required: 'required',
    type: 'text',
}];

$("#submitBtn2").click(function() {
    submit();
});


function isEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

// function cleanInputs() {
//     $(".contact-form").find("input").each(function() {
//         $(this).val("");
//     });
//     $(".contact-form").find("textarea").each(function() {
//         $(this).val("");
//     });
// }

function submit() {
    console.log('cliquei form2');
    var submit = "";
    var text = "";

    //Input
    if (input === "true") {
        for (var i = 0; i < inputs.length; i++) {
            var input_val = $("#" + inputs[i].id).val();
            if (inputs[i].required === 'required') {
                if (input_val.length === 0) {
                    submit += "1";
                } else {
                    if (inputs[i].type === "email") {
                        $("#help_input_" + inputs[i].id).html("");
                        submit += "0";

                        if (isEmail(input_val) === true) {
                            //email is valid
                            $("#help_input_" + inputs[i].id).html("");
                            submit += "0";
                        } else {
                            //email is not valid				
                            submit += "1";
                            $("#help_input_" + inputs[i].id).html("Digite um e-mail válido");
                        }
                    } else if (inputs[i].type === "date") {
                        submit += "0";
                        text += inputs[i].label + ": " + isDate(input_val) + "\n";
                    } else {
                        $("#asterisk_input_" + inputs[i].id).html("");
                        submit += "0";
                        text += inputs[i].label + ": " + input_val + "\n";
                    }
                }
            } else {
                if (inputs[i].type === "date") {
                    submit += "0";
                    text += inputs[i].label + ": " + isDate(input_val) + "\n";
                } else {
                    var input_val = $("#" + inputs[i].id).val();
                    submit += "0";
                    text += inputs[i].label + ": " + input_val + "\n";
                }
            }
        }
    }

    if ((parseInt(submit) + 0) === 0) {

        var message = title_form + "\n\n" + "Quero patrocinar um exemplar do livro" + "\n\n";
        message += text;

        message = window.encodeURIComponent(message);

        if (openInNewWindow === "true") {
            blank = "_blank";
        } else {
            blank = "_self";
        }

        window.open("https://wa.me/" + mobile + "?text=" + message, blank);

        alert("Você foi redirecionado para o WhatsApp para enviar a sua mensagem. \n \n Entraremos em contacto em breve, obrigado.");
        // cleanInputs();
    }
}