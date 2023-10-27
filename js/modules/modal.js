export default function initModal() {
  const botaoAbrir = document.querySelector(".abrir");
  const botaoFechar = document.querySelector(".fechar");
  const containerModal = document.querySelector(".container");
  const inputEmail = document.getElementById("email");

  botaoAbrir.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);

  function abrirModal() {
    containerModal.classList.add("ativo");
    inputEmail.focus();
  }

  function fecharModal() {
    containerModal.classList.remove("ativo");
  }
}
