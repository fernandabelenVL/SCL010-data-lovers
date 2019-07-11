window.addEventListener("load", () => {
  return showPokemon(allPokemon)
});

//convertimos a objeto el array
const allPokemon = window.POKEMON.pokemon;
const container = document.getElementById("cards-container");

let showPokemon = (arr) => {
  //creamos las cartas
  for (let i = 0 ; i < arr.length; i++){

    let pokeCard = document.createElement("div");
    pokeCard.setAttribute("data-target" , "#modal-info");
    pokeCard.setAttribute("data-toogle" , "modal");
    pokeCard.setAttribute("value" , arr[i].id);
    pokeCard.className = "pokemon-card";

    //creamos una nueva imagen para cada elemento i de allPokemon
    let pokeImage = document.createElement('IMG');
    pokeImage.setAttribute("src", arr[i].img)
    
    //creamos una nueva p para nombre y para número de allPokemon
    let pokeName = document.createElement('p');
    pokeName.innerHTML = arr[i].name;
    pokeName.className = "pokemon-name";

    let pokeNumber = document.createElement('p');
    pokeNumber.innerHTML = "#" + arr[i].num;
    pokeNumber.className = "pokemon-number";

  //agregar nuevos <p> dentro de un <div> con todos los nombre, números e imagénes
  pokeCard.appendChild(pokeImage);
  pokeCard.appendChild(pokeName);
  pokeCard.appendChild(pokeNumber);

  //imprime dentro del HTML todos los nuevos <div> dentro de la etiqueta "cards-container"
  document.getElementById("cards-container").appendChild(pokeCard).innerHTML;
}
};
//ordenar por nombre y tipo
const sortPokemon = document.getElementById("sort-Pokemon");
sortPokemon.addEventListener("change", ()=>{
  container.innerHTML="";
  let data =window.POKEMON.pokemon;
  let condition = sortPokemon.options[sortPokemon.selectedIndex].value;
  //console.log(condition);
  window.sortBy(data, condition);
  showPokemon(data);
  });

//filtrar por tipo
const selectType = document.getElementById("type");
selectType.addEventListener("change", ()=> {
  // el tipo seleccionado es almacenado en condition
  let condition = selectType.options[selectType.selectedIndex].value;
  // borra contenido de section
  container.innerHTML = "El " + window.computeStats(pokemonType,dataPokemon) + "% del total de Pokemones corresponde al tipo " + condition;
  // crea nuevos divs en base a array
  let pokeArray = window.filterTypes(window.data, condition);
  showPokemon(pokeArray);
  let pokeArray = window.filterType(window.data, condition);
  showPokemon(pokeArray);
} 
);

let pokePercent="";
const resultPercent = document.getElementById("containerPercent");
//filtrar por Huevo Tipo de pokemon 
const selectTypeegg = document.getElementById("egg");
selectTypeegg.addEventListener("change", ()=> {
  resultPercent.innerHTML = "";
  // el tipo seleccionado es almacenado en condition
  let condition = selectTypeegg.options[selectTypeegg.selectedIndex].value;
  // borra contenido de section
  container.innerHTML = "";
  // crea nuevos divs en base a array
  let pokeArray = window.filterTypesegg(window.data, condition);
  showPokemon(pokeArray);
} 
);

//Back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
topFunction();


//Busqueda Interna -> Pokemones
const search = document.getElementById("searchPokemon");
const filter = () => {
    let enterSearch = search.value.toLowerCase();
    container.innerHTML = "";
    for (let i = 0; i < allPokemon.length; i++) {
      let pokeName = allPokemon[i].name.toLowerCase();
      let pokeNumber = allPokemon[i].num;

      if (pokeName.indexOf(enterSearch) !== -1) {
        let pokeCard = document.createElement("div");
        pokeCard.setAttribute("value" , allPokemon[i].id);
        pokeCard.className = "pokemon-card";
    
        let pokeImage = document.createElement('IMG');
        pokeImage.setAttribute("src", allPokemon[i].img)
        
        let pokeName = document.createElement('p');
        pokeName.innerHTML = allPokemon[i].name;
        pokeName.className = "pokemon-name";
    
        let pokeNumber = document.createElement('p');
        pokeNumber.innerHTML = "#" + allPokemon[i].num;
        pokeNumber.className = "pokemon-number";
      pokeCard.appendChild(pokeImage);
      pokeCard.appendChild(pokeName);
      pokeCard.appendChild(pokeNumber);
      document.getElementById("cards-container").appendChild(pokeCard).innerHTML;
    }

      else if (pokeNumber.indexOf(enterSearch) !== -1) {
        let pokeCard = document.createElement("div");
        pokeCard.setAttribute("data-target" , "#modal-info");
        pokeCard.setAttribute("data-toogle" , "modal");
        pokeCard.setAttribute("value" , allPokemon[i].id);
        pokeCard.className = "pokemon-card";
    
        let pokeImage = document.createElement('IMG');
        pokeImage.setAttribute("src", allPokemon[i].img)
        
        let pokeName = document.createElement('p');
        pokeName.innerHTML = allPokemon[i].name;
        pokeName.className = "pokemon-name";
    
        let pokeNumber = document.createElement('p');
        pokeNumber.innerHTML = "#" + allPokemon[i].num;
        pokeNumber.className = "pokemon-number";
      pokeCard.appendChild(pokeImage);
      pokeCard.appendChild(pokeName);
      pokeCard.appendChild(pokeNumber);
      document.getElementById("cards-container").appendChild(pokeCard).innerHTML;
    
      }
  }
}
search.addEventListener("keyup", filter);
