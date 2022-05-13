const listagem = document.querySelectorAll('.pokemon');
const cartaoPokemon = document.querySelectorAll('.cartao-pokemon');


listagem.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        // - remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto')

        // - ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado;
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir);
        cartaoPokemonAbrir.classList.add('aberto')

        // - remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        // - adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})
