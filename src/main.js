window.addEventListener("load", () => {
  return showPokemon(allPokemon)
});

//convertimos a objeto el array
const allPokemon = POKEMON.pokemon;
const container = document.getElementById("cards-container");
let newArray;

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
  window.condition = sortPokemon.options[sortPokemon.selectedIndex].value;
  console.log(condition);
  sortBy(data, condition);
  showPokemon(data);
  });
//Filtrar por Tipo
const selectType = document.getElementById("type");// selector por tipo 
selectType.addEventListener("change", showByType);
function showByType() {
    //Condición = variable
    let data = filterTypesPokemon(selectType.value); // Llamo a la funcion del data
    container.innerHTML = "";
    showPokemon(data)
      }

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

// Función Buscar Pokemon
function searchPokemon() {

  // capturar palabra a buscar 
  let nameSearch = document.getElementById("searchPokemon").value;
  // La variable siempre se deben intentar definir fuera de los ciclos
 let namePoke;
  // Borra los datos del contenedor
  container.innerHTML = "";

  for (let i = 0 ; i < data.length ; i++) {
    namePoke = data[i].name;

    // comparación entre nombre buscado y nombre del pokemon actual
    var searchResult = namePoke.localeCompare(nameSearch);

    if ( searchResult == 0 ) {
      alert("Pokemon encontrado");
      
        let newElement = document.createElement('div');
        newElement.id = data[i].name;
        newElement.className = "pokemon-card";
        let newImage = document.createElement('IMG');
        newImage.setAttribute("src", data[i].img);
        let newName = document.createElement('p');
        newName.className = "pokemon-name";
        let newNumber = document.createElement('p');
        newNumber.className = "pokemon-number";
      
        newElement.appendChild(newImage);
        newElement.appendChild(newName);
        newElement.appendChild(newNumber);
        newName.innerHTML = data[i].name;
        newNumber.innerHTML = "#" + allPokemon[i].num;
      
        document.getElementById("cards-container").appendChild(newElement).innerHTML;
      return;
    } 

    if ( i + 1 == data.length ) {
      alert("Pokemon no encontrado o revise si esta escrito de la misma manera en las cartas");    }
    console.log("despues del If: " +  data.length);
  }
}

