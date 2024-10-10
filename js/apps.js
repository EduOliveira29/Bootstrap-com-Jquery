$(document).ready(function () {

    $("#telefone").mask('(00) 00000-0000', {
        placeholder: 'opcional'
    });

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            },
            
        },
        submitHandler: function (form) {
            if (form) {
                alert("Sua requisição foi enviada para análise,logo entraremos em contato ");
                form.reset();
            }
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir!");
        }
    });
});