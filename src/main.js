window.addEventListener("load", () => {
  return showPokemon(allPokemon);
});

//convertimos a objeto el array
const allPokemon = window.POKEMON.pokemon;
const container = document.getElementById("cards-container");
const pokemonPorcent = document.getElementById("pokemon-porcent");
document.getElementById("pokemon-porcent").style.display = "none"


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
  let conditionText = selectType.options[selectType.selectedIndex].text;
  // borra contenido de section
  container.innerHTML = "";
  // crea nuevos divs en base a array
  let pokeArray = window.filterTypes(window.data, condition);
  pokemonPorcent.innerHTML="<p>¡Un dato interesante!</p"
  pokemonPorcent.innerHTML+="El " + window.calcPercent(pokeArray,window.data) + "% del total de Pokémon de la región de Kanto corresponde al tipo " + conditionText;
  container.className = "pokemon-porcent";
  document.getElementById("pokemon-porcent").style.display = "block";
  showPokemon(pokeArray);
} 
);

//filtrar por Huevo de pokemon 
const selectTypeegg = document.getElementById("egg");
selectTypeegg.addEventListener("change", ()=> {
  // el tipo seleccionado es almacenado en condition obteniendo valor por el usuario
  let condition = selectTypeegg.options[selectTypeegg.selectedIndex].value;
  let conditionText = selectTypeegg.options[selectTypeegg.selectedIndex].text;
  // borra contenido de section
  // crea nuevos divs en base a array
  let pokeArray = window.filterTypesegg(window.data, condition);
  for (let i=0; i < pokeArray.length; i++){
    container.innerHTML = "";
    pokemonPorcent.innerHTML="<p>¡Un dato interesante!</p"
    if (condition === "Not in Eggs") {
      pokemonPorcent.innerHTML+="El " + window.calcPercent(pokeArray,window.data) + "% de los Pokémon de la región de Kanto no eclosionan en huevos" 
      document.getElementById("pokemon-porcent").style.display = "block";  
    }
    else {
      pokemonPorcent.innerHTML+="El " + window.calcPercent(pokeArray,window.data) + "% de los Pokémon de la región de Kanto eclosionan en huevos de " + conditionText;
      document.getElementById("pokemon-porcent").style.display = "block";  
    }
    showPokemon(pokeArray);
    }
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


//Busqueda Pokemones
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
