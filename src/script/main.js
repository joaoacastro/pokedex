const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    EsconderCartaoPokedev();

    const idPokedevSelecionado = MostrarCartaoPokedevSelecionado(pokedev);

    DesativarPokedevNaListagem();

    AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado);
  });
});

function AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
  const idPokedevSelecionadoNaListagem =
    document.getElementById(idPokedevSelecionado);
  idPokedevSelecionadoNaListagem.classList.add("ativo");
}

function DesativarPokedevNaListagem() {
  const pokedevAtivoNaListagem = document.querySelector(".ativo");
  pokedevAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    setTimeout(() => {
        CartaoPokedevParaAbrir.classList.add("aberto");
    }, 500); // Pequeno atraso para garantir que o CSS processe a transição
    return idPokedevSelecionado;
}
function EsconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    if (cartaoPokedevAberto) {
        setTimeout(() => {
            cartaoPokedevAberto.classList.remove("aberto");
        }, 500); // Pequeno atraso para garantir que o CSS processe a transição
        
    }
}
