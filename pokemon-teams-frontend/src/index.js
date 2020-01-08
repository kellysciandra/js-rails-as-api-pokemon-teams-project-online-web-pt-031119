const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const container = document.querySelector('.container')

//When a user loads the page, they should see all trainers, with their current team of Pokemon.

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault()
    fetchTrainers()
})

class Trainer {
    constructor(trainerAttributes) {
        this.id = trainerAttributes.id;
        this.name = trainerAttributes.name;
        // this.pokemons.nickname = trainerAttributes.pokemons.nickname;

    }

    render() {
        return ` <div class="card" data-id="1"><p>${this.name}</p>
                <button data-trainer-id="1">Add Pokemon</button>
                <ul>
                    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
                    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
                    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
                    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
                    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
                </ul>
                </div>`
    }
}


function fetchTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(pokemon => putOnDom(pokemon))
}

function putOnDom(pokemon) { console.log(pokemon)
    pokemon.forEach(data => {
        container.innerHTML += new Trainer(data).render()
    })
}