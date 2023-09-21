    document.addEventListener("DOMContentLoaded",
    
    function () {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const form = document.querySelector("form");

    const usuariosCadastrados = [];

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const dataNascimento = document.getElementById("dataNascimento").value;
      const email = emailInput.value;
      const senha = senhaInput.value;

      if (usuariosCadastrados.includes(email)) {
        alert("Este email já foi cadastrado.");
        return;
      }

      if (senha.length < 6) {
        alert("A senha deve conter no mínimo 6 caracteres.");
        senhaInput.style.borderColor = "red";
        return;
      }
      usuariosCadastrados.push(email);

      senhaInput.value = "";

      alert("Usuário cadastrado com sucesso!");
      window.location.href = "TelaLogin.html";
    });

    senhaInput.addEventListener("input", function () {
      senhaInput.style.borderColor = "#ECECEC";
    });
});