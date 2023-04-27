//efeito de esconder formulário de cadastro
$(document).ready(function () {
    // document.getElementById("botao-cadastrar").click();
    $("#botao-cadastrar").click(function () {
        // $("#botao-cadastrar").show("slow");
        // $("#botao-cadastrar").hide("slow");
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});
