document.addEventListener("DOMContentLoaded", function(){

    var cubos_menores = `<div class="ladoA" id="umA"></div>
                        <div class="ladoA" id="doisA"></div>
                        <div class="ladoA" id="tresA"></div>
                        <div class="ladoA" id="quatroA"></div>
                        <div class="ladoA" id="cincoA"></div>
                        <div class="ladoA" id="seisA"></div>`

    var local_um = document.querySelectorAll("#local_um");
    var local_dois = document.querySelectorAll("#local_dois");
    var local_tres = document.querySelectorAll("#local_tres");
    var local_quatro = document.querySelectorAll("#local_quatro");
    var local_cinco = document.querySelectorAll("#local_cinco");
    var local_seis = document.querySelectorAll("#local_seis");
    var local_sete = document.querySelectorAll("#local_sete");
    var local_oito = document.querySelectorAll("#local_oito");
    var local_nove = document.querySelectorAll("#local_nove");


    local_um.forEach(elemento_local_um =>{
        elemento_local_um.innerHTML = cubos_menores;
    });
    local_dois.forEach(elemento_local_dois =>{
        elemento_local_dois.innerHTML = cubos_menores;
    });
    local_tres.forEach(elemento_local_tres =>{
        elemento_local_tres.innerHTML = cubos_menores;
    });

    local_quatro.forEach(elemento_local_quatro =>{
        elemento_local_quatro.innerHTML = cubos_menores;
    });
    local_cinco.forEach(elemento_local_cinco =>{
        elemento_local_cinco.innerHTML = cubos_menores;
    });
    local_seis.forEach(elemento_local_seis =>{
        elemento_local_seis.innerHTML = cubos_menores;
    });

    local_sete.forEach(elemento_local_sete =>{
        elemento_local_sete.innerHTML = cubos_menores;
    });
    local_oito.forEach(elemento_local_oito =>{
        elemento_local_oito.innerHTML = cubos_menores;
    });
    local_nove.forEach(elemento_local_nove =>{
        elemento_local_nove.innerHTML = cubos_menores;
    });

    /*Construção das laterais de cada cubo*/
    /*Definindo com e distancia dos lados do centro do cubo*/

    var umA = document.querySelectorAll("#umA");
    var doisA = document.querySelectorAll("#doisA");
    var tresA = document.querySelectorAll("#tresA");
    var quatroA = document.querySelectorAll("#quatroA");
    var cincoA = document.querySelectorAll("#cincoA");
    var seisA = document.querySelectorAll("#seisA");

    umA.forEach(element_umA =>{
        element_umA.style.background    = `white`;
        element_umA.style.transform     = `translateZ(33px) rotateY(0deg)`;
    });
    doisA.forEach(element_doisA =>{
        element_doisA.style.background  = `yellow`;
        element_doisA.style.transform   = `translateX(33px) rotateY(90deg)`;
    });
    tresA.forEach(element_tresA =>{
        element_tresA.style.background  = `blue`;
        element_tresA.style.transform   = `translateZ(-33px) rotateY(0deg)`;
    });
    quatroA.forEach(element_quatroA =>{
        element_quatroA.style.background= `green`;
        element_quatroA.style.transform = `translateX(-33px) rotateY(90deg)`;
    });
    cincoA.forEach(element_cincoA =>{
        element_cincoA.style.background = `darkorange`;
        element_cincoA.style.transform  = `translateY(-33px) rotateX(90deg)`;
    });
    seisA.forEach(element_seisA =>{
        element_seisA.style.background  = `crimson`
        element_seisA.style.transform   = `translateY(33px) rotateX(90deg)`;
    });
});