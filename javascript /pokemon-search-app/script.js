const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () => {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json(); 
        console.log(data);
    } catch (error) {
        console.log(err);
    }    
}

fetchData();