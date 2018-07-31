function mudarTitulo() {
    var valor = document.getElementById("id5").value;
    var p5 = document.getElementById("titulo");
    p5.innerHTML = valor;
}
function mudarSub() {
    var valor = document.getElementById("id6").value;
    var p6 = document.getElementById("subtitulo");
    p6.innerHTML = valor;
}
function mudarData() {
    var valor = document.getElementById("id1").value;
    var p1 = document.getElementById("data");
    p1.innerHTML = "Data: " + valor;
}

function mudarHora() {
    var valor = document.getElementById("id2").value;
    var p2 = document.getElementById("hora");
    p2.innerHTML = "Hora: " + valor;
}

function mudarTelefone() {
    var valor = document.getElementById("id3").value;
    var p3 = document.getElementById("tel");
    p3.innerHTML = "Telefone: " + valor;
}

function mudarLocal() {
    var valor = document.getElementById("id4").value;
    var p4 = document.getElementById("local");
    p4.innerHTML = "Local: " + valor;
}

function mudarOpc() {
    var valor = document.getElementById("id7").value;
    var p7 = document.getElementById("txtopc");
    p7.innerHTML = valor;
}

function mudarTipo(x) {
    var valor = document.getElementById("tipo").value;
    var c = document.getElementById(x);
    switch (valor) {
        case "Arial":
            //    c.style.color = valor;
            c.style.fontFamily = "Arial,sans-serif";
            //    $("#subtitulo").css("font-family", "Arial,sans-serif");
            break;
        case "Helvetica":
            $("#subtitulo").css("font-family", "Helvetica");
            break;
        case "Times":
            //    $("#subtitulo").css("font-family", "Times, serif");
            c.style.fontFamily = "Times, serif";
            break;
        case "Georgia":
            $("#subtitulo").css("font-family", "Georgia");
            break;
    }
}

function mudarCor(x) {

    var valor = document.getElementById("cor").value;
    var c = document.getElementById(x);
    c.style.color = valor;
}

function mudarTamanho(x) {
    var valor = document.getElementById("tamanho").value;
    valor = parseInt(valor) + "px";
    var c = document.getElementById(x);
    c.style.fontSize = valor;
}

function verificaCampos() {

    var aChk = document.getElementsByName("item");

    for (var i = 0; i < aChk.length; i++) {

        if (aChk[i].checked == true) {

            var item = aChk[i].value;
            mudarTipo(item);
            mudarCor(item);
            mudarTamanho(item);
        }
    }
}

function escolheMidia() {
    // var mi = document.getElementByName("sec");
    // mi.style.display = "none";

    var aChk = document.getElementsByName("item");

    for (var i = 0; i < aChk.length; i++) {

        if (aChk[i].checked == true) {

            var item = aChk[i].value;
            if (item == "midia1") {
                // var mi = document.getElementById("sec");
                // mi.style.display = "block";
                alert("Midia1");
            }
            if (item == "midia2") {
                alert("Midia2");
                // var mi = document.getElementsByName("sec");
                mi.style.display = "none";
            }
            if (item == "midia3") {
                alert("Midia3");
            }
        }
    }
}



