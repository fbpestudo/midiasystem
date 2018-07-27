function mudarTitulo(){
    var valor = document.getElementById("id5").value;
    var p5 = document.getElementById("titulo");
    p5.innerHTML = valor;
}
function mudarSub(){
    var valor = document.getElementById("id6").value;
    var p6 = document.getElementById("subtitulo");
    p6.innerHTML = valor;
}
function mudarData(){
    var valor = document.getElementById("id1").value;
    var p1 = document.getElementById("data");
    p1.innerHTML = "Data: "+valor;
}

function mudarHora(){
    var valor = document.getElementById("id2").value;
    var p2 = document.getElementById("hora");
    p2.innerHTML = "Hora: "+valor;
}

function mudarTelefone(){
    var valor = document.getElementById("id3").value;
    var p3 = document.getElementById("tel");
    p3.innerHTML = "Telefone: "+valor;
}

function mudarLocal(){
    var valor = document.getElementById("id4").value;
    var p4 = document.getElementById("local");
    p4.innerHTML = "Local: " +valor;
}

function mudarOpc(){
    var valor= document.getElementById("id7").value;
    var p7= document.getElementById("txtopc");
    p7.innerHTML =valor;
}