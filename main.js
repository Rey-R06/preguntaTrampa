$(document).ready(function(){
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let numero = numeroAleatorio(50, 70);
    $("#no").mouseenter(function() {
        let posicionActual = parseInt($("#no").css("bottom")) || 0;
        $("#no").css("bottom", posicionActual + numero + "px");
        $("#si").css("left", "50px");
    })

let frutas = ['Estas seguro?', 'Elige la opcion correcta', '100%?', 'No te equivocastes?'];
    $("#no").click(function() {
        let a = numeroAleatorio(0, 3);
                $("#pregunta").text(frutas[a]);
    })

    $("#si").click(function() {
        let a = numeroAleatorio(0, 3);
                $("#pregunta").text("Lo sabia😁");
                $("#si").hide();
                $("#no").hide();
                $("#caja").css("background", "linear-gradient(to bottom, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)");
                
    })
});