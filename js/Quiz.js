function calcularRecomendacao() {
    const respostasFinais = respostas.join("");

    let recomendacao = "";

    switch (respostasFinais) {
        case "ACBDB":
            recomendacao = "Turismo: Noite";
            break;
        case "BBBDC":
            recomendacao = "Informática: Noite";
            break;
        case "ACBCB":
            recomendacao = "Edificações: Noite";
            break;
        case "BBCDA":
            recomendacao = "Administração: Noite";
            break;
        case "CBBBC":
            recomendacao = "Enfermagem: Manhã";
            break;
        case "BCBBD":
            recomendacao = "Ensino Médio com itinerário informativo em Ciências Humanas e suas tecnologias: Manhã";
            break;
        case "BBCBD":
            recomendacao = "Ensino Médio com itinerário informativo em Matemática e suas tecnologias: Tarde";
            break;
        case "ABBBB":
            recomendacao = "Ensino Médio integrado ao curso técnico de administração: Tarde";
            break;
        case "CBBBA":
            recomendacao = "Ensino Médio integrado ao curso técnico de desenvolvimento de sistemas: Tarde";
            break;
        default:
            recomendacao = "Ensino Médio integrado ao curso técnico de desenvolvimento de sistemas: Tarde";
    }

    document.getElementById("recomendacao").textContent = recomendacao;
}

window.onload = calcularRecomendacao;