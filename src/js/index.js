/*
quando clicar no pokemon da listagem temos que esconder o cartão pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativa que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

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