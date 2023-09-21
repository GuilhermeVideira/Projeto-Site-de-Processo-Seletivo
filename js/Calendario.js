function mostrarMensagem() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".mensagem").style.display = "block";
}

function fecharMensagem() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".mensagem").style.display = "none";
}

window.addEventListener("load", mostrarMensagem);

document.getElementById("fecharMensagem").addEventListener("click", fecharMensagem);
