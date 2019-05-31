let request = new XMLHttpRequest;

let url =  "https://pokeapi.co/api/v2/pokemon";

request.open("GET", url, true);


request.onload = function() {
    let data = JSON.parse(this.response);
    
    let pokeList = document.getElementById('pokelist');
    
    //Creates rows
    // let row = document.createElement('div');
    // row.className = "row";
    // pokeList.appendChild(row);
    
    let row = null;
    
    let pokemonCounter = 0; 
    
    if(request.status >= 200 && request.status < 400 ){
        data.results.forEach(pokemon => {
            
            if(pokemonCounter % 4 == 0){
                row = document.createElement('div');
                row.className = "row";
                pokeList.appendChild(row);
            }
            
            
            
            let card = document.createElement('div');
            card.className = "col-3 pokemon";
            
            let p = document.createElement('p');
            p.textContent = pokemon.name;
            card.appendChild(p);
            row.appendChild(card);
            pokemonCounter++;
        });
        
        
    }
};



request.send();
