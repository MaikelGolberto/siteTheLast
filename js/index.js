function clique(img){
    let modalC = document.getElementById("codigoModal");
    let imgC = document.getElementById("imgModal");
    let botaoF = document.getElementById("botaoFechar");

    modalC.style.display="block";
    imgC.src=img;
    botaoF.onclick=function(){
        modalC.style.display="none";
    }
}