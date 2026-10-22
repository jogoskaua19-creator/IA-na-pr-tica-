
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.querySelector("[data-ano]");
  if (ano) {
    ano.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("[data-voltar]").forEach((botao) => {
    botao.addEventListener("click", () => {
      window.history.back();
    });
  });
});
 
