/* Manejo del DOM */

//convertimos a objeto el array
const allPokemon = POKEMON.pokemon;
//recorremos todos los elementos del objeto - los 151 elementos.
for (let i = 0 ; i < allPokemon.length ; i++){
    //crear un nuevo div para contener cada pokemon
    let newElement = document.createElement('div');
    newElement.id = allPokemon[i].name;
    //le asigna una clase al nuevo div (de cada carta)
    newElement.className = "pokemon-card";

    //creamos una nueva imagen para cada elemento i de allPokemon
    let newImage = document.createElement('IMG');
    newImage.setAttribute("src", allPokemon[i].img)
    //creamos una nueva p para nombre y para número de allPokemon
    let newName = document.createElement('p');
    newName.className = "pokemon-name";
    let newNumber = document.createElement('p');

    //agregar nuevos <p> dentro de un <div> con todos los nombre, números e imagénes
    newElement.appendChild(newImage);
    newElement.appendChild(newName);
    newElement.appendChild(newNumber);
    //imprimir dentro del <div> el contenido del <p>
    newName.innerHTML = allPokemon[i].name;
    newNumber.innerHTML = allPokemon[i].num;

    //imprime dentro del HTML todos los nuevos <div> dentro de la etiqueta "cards-container"
    document.getElementById("cards-container").appendChild(newElement).innerHTML;
};


//Back to top BTN
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

let search=$("searchteble").POKEMON
