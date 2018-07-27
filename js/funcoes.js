 function mudarImg1(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg1.jpg")';
        }

        function mudarImg2(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg2.png")';
        }        
        
        function mudarImg3(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg3.jpg")';
        }

        function mudarImg4(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg4.png")';
        }
        function mudarImg5(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg5.png")';
        }
        function mudarImg6(){
             var sec = document.getElementsByTagName('section')[0];
             sec.style.backgroundImage = 'url("https://midiapost-lfvasconcellos.c9users.io/images/bg6.png")';
        }

        
        function mudarTitulo(){
             var valor = document.getElementById("id5").value;
             var p5 = document.getElementById("titulo");
             p5.innerHTML = valor;
        }
       function mudarCorTitulo(){
             var valor = document.getElementById("cortitulo").value;
             var p5 = document.getElementById("titulo");
             p5.style.color = valor;
        }
        
        
        
        function mudarSub(){
             var valor = document.getElementById("id6").value;
             var p6 = document.getElementById("subtitulo");
             p6.innerHTML = valor;
        }
        function mudarCorSub(){
             var valor = document.getElementById("corsub").value;
             var p6 = document.getElementById("subtitulo");
             p6.style.color = valor;
        }
        
        
        
        function mudarData(){
             var valor = document.getElementById("id1").value;
             var p1 = document.getElementById("data");
             p1.innerHTML = valor;
        }
        function mudarCorData(){
             var valor = document.getElementById("cordata").value;
             var p6 = document.getElementById("data");
             p6.style.color = valor;
        }
        
        
        
        function mudarHora(){
             var valor = document.getElementById("id2").value;
             var p2 = document.getElementById("hora");
             p2.innerHTML = valor;
        }
        function mudarCorHora(){
             var valor = document.getElementById("corhora").value;
             var p6 = document.getElementById("hora");
             p6.style.color = valor;
        }
        
        function mudarTelefone(){
             var valor = document.getElementById("id3").value;
             var p3 = document.getElementById("telefone");
             p3.innerHTML = valor;
        }
        function mudarCorTelefone(){
             var valor = document.getElementById("cortelefone").value;
             var p6 = document.getElementById("telefone");
             p6.style.color = valor;
        }
        
        
        function mudarLocal(){
             var valor = document.getElementById("id4").value;
             var p4 = document.getElementById("local");
             p4.innerHTML = valor;
        }
        function mudarCorLocal(){
             var valor = document.getElementById("corlocal").value;
             var p6 = document.getElementById("local");
             p6.style.color = valor;
        }

        function mudarOpcional(){
             var valor = document.getElementById("id7").value;
             var p4 = document.getElementById("txtgeral");
             p4.innerHTML = valor;
        }
        function mudarCorOpcional(){
             var valor = document.getElementById("coropcional").value;
             var p6 = document.getElementById("txtgeral");
             p6.style.color = valor;
        }
    
        
        function mudarCorFundoTitulo(){
             var valor = document.getElementById("corfundotitulo").value;
             var p9 = document.getElementById("titulo");
             p9.style.background = valor;
        }
        function mudarCorFundoSubTitulo(){
             var valor = document.getElementById("corfundosubtitulo").value;
             var p10 = document.getElementById("subtitulo");
             p10.style.background = valor;
        }
        function mudarCorApoio(){
             var valor = document.getElementById("corapoio").value;
             var p6 = document.getElementById("apoio");
             p6.style.color = valor;
        }