let request = new XMLHttpRequest();
let url = "https://pokeapi.co/api/v2/pokemon";
// "https://pokeapi.co/api/v2/pokemon?limit=20&offset=40"

request.open("GET", url, true);

request.onload = function() {
    let data = JSON.parse(this.response);
    let pokeList = document.getElementById('pokelist');
    let row = null;
    let pokemonCounter = 0;
    if (request.status >= 200 && request.status < 400) {
        //condition for when request is succesful, status code of request 
        data.results.forEach(pokemon => {
            if(pokemonCounter % 4 ==0) { //modulus 
                row = document.createElement('div');
                row.className = "row";
                pokeList.appendChild(row);
            }
            //create a new div of col-3 (4 in a row)
            let card = document.createElement('div');
            card.className = "col-3 pokemon";
            
            //display pokemon name
            let p = document.createElement('p');
            p.textContent = pokemon.name;
            
            //Append name to the column div and column to the row
            card.appendChild(p);
            row.appendChild(card);
            pokemonCounter++;
        });
    }
    else {
        pokeList.textContent = "Pok&eacutemon not found!";
    } 
};

request.send();
