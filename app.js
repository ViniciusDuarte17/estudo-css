let click = false;

let button = document.querySelector("button");

button.addEventListener("click", function () {
  let messageButton = !click
    ? "<img id='modo' src='/img/dark.svg' alt='imagem do modo escuro'>"
    : "<img id='modo' src='/img/light.svg' alt='imagem do modo luz'>";

  button.innerHTML = messageButton;

  let color = click ? "white" : "black";

  let background = click ? "black" : "#fff";

  let isModo = click ? "#22D4FD" : "#fff";

  // Manipulando a dom para adicionar o efeito dark-mode ou light-modo;
  
  let meuContainer = document.getElementById("container");

  meuContainer.style.backgroundColor = background;

  meuContainer.style.color = color;

  button.style.backgroundColor = isModo;

  click = !click;
});
