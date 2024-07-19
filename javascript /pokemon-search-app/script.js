const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const spriteUrl = document.getElementById("sprite");
const spriteContainer = document.getElementById("sprite-container");
const pokemonType = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const urlStats = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
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

const fetchStats = async (url) => {
    try {
        const res = await fetch(url);
        const stats = await res.json();
        showPokemonStats(stats);
    } catch (error) {
        console.log(error);
    }
} 

const showPokemonInfo = (pokemon) => {
    const input = searchInput.value;
    const pokemonInfo = pokemon.filter((item) => (item.id === parseInt(input) || item.name ===  input.toLowerCase()));

    console.log(pokemonInfo);
    console.log(pokemonInfo[0].id);
    console.log(pokemonInfo[0].name);

    /*
    pokemonInfo.map((item) => {
        const { id, name, url } = item;
        
        if(parseInt(input) =! id || input.toLowerCase() != name){
            alert("Pokémon not found");
        } else {
            pokemonId.textContent = `#${id}`;
            pokemonName.textContent = name;
            spriteContainer.innerHTML = `<img id="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name} front default sprite"> `;

            fetchStats(url);
        }        
    });
    */

    if(pokemonInfo <= 0){
        alert("Pokémon not found");
    } else {
        pokemonInfo.map((item) => {
            const { id, name, url } = item;
            pokemonId.textContent = `#${id}`;
            pokemonName.textContent = name;
            spriteContainer.innerHTML = `<img id="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name} front default sprite"> `;
            
            fetchStats(url);
        });
    }
}

const showPokemonStats = (pokemonStats) => {
    const { weight, height, stats, types } = pokemonStats;

    pokemonWeight.textContent = `Weight: ${weight}`;
    pokemonHeight.textContent = `Height: ${height}`;

    pokemonType.innerHTML = "";

    pokemonStats.types.forEach((item) => {
        pokemonType.innerHTML += `<span class="type ${item.type.name}">${item.type.name.toUpperCase()}</span>`;
    });

    pokemonHp.textContent = stats[0].base_stat;
    pokemonAttack.textContent = stats[1].base_stat;
    pokemonDefense.textContent = stats[2].base_stat;
    specialAttack.textContent = stats[3].base_stat;
    specialDefense.textContent = stats[4].base_stat;
    pokemonSpeed.textContent = stats[5].base_stat;
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData();
});