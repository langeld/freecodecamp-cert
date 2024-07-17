const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spriteUrl = document.getElementById("sprite");
const type = document.querySelector(".type");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";


const fetchData = async () => {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json(); 
        showPokemonInfo(data.results);       
    } catch (error) {
        console.log(err);
    }    
}

const showPokemonInfo = (pokemon) => {
    const input = searchInput.value;
    const pokemonInfo = pokemon.filter((item) => (item.id === parseInt(input) || item.name === input));
    console.log(pokemonInfo);
    

    pokemonInfo.map((item) => {
        const { id, name, url } = item;
        pokemonId.textContent = `#${id}`;
        pokemonName.textContent = name;
        spriteUrl.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        spriteUrl.alt = `${name} front default sprite`;

        console.log(url);
    });
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData();
})