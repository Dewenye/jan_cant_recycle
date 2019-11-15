let request = new XMLHttpRequest();
let userInput = document.getElementById(userInput);
let url = "https://data.cityofnewyork.us/resource/sxx4-xhzg.json?borough=" + userInput ;

request.open("GET", url, true);

request.onload = function() { 
    // Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response); // this ==> OWNERSHIP
    console.log(data)
    let userInfo = document.getElementById('userInfo');
    
    let row = document.createElement('div');
    row.className = "row";
    userInfo.appendChild(row);
    
    // let row = null; 
    
    let pokemonCounter =0;
    if (request.status >= 200 && request.status < 400) {
        data.results.forEach(pokemon => { 
            if (pokemonCounter % 4 == 0) {
                row = document.createElement('div');
                row.className = "row";
                userInfo.appendChild(row);
            }
            
         // #1 Create a new div of col-3 (we will fit 4 to a row)
        let card = document.createElement('div');
        card.className = "col-3 pokemon";
        
        // #2 Display the pokemon's name
        let p = document.createElement('p');
        p.textContent = data.address;
        
        // #3, #4 Append the name to the column div and column to the row
        card.appendChild(p);
        row.appendChild(card);
        pokemonCounter++;
    }
}

