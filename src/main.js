/* Manejo del DOM */

//convertimos a objeto el array
const allPokemon = POKEMON.pokemon;
const sortPokemon = document.getElementById("sort-Pokemon");
const container = document.getElementById("cards-container");
const filterPokemon = document.getElementById("filter-Pokemon");

//funcion container
function newContainer () {       
  let newElement = document.createElement('div');
  newElement.id = data[i].name;
  newElement.className = "pokemon-card";
  let newImage = document.createElement('IMG');
  newImage.setAttribute("src", data[i].img)
  let newName = document.createElement('p');
  newName.className = "pokemon-name";
  let newNumber = document.createElement('p');

  newElement.appendChild(newImage);
  newElement.appendChild(newName);
  newElement.appendChild(newNumber);
  newName.innerHTML = data[i].name;
  newNumber.innerHTML = data[i].num;

  document.getElementById("cards-container").appendChild(newElement).innerHTML;
}


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
    newNumber.className = "pokemon-number";

    //agregar nuevos <p> dentro de un <div> con todos los nombre, números e imagénes
    newElement.appendChild(newImage);
    newElement.appendChild(newName);
    newElement.appendChild(newNumber);
    //imprimir dentro del <div> el contenido del <p>
    newName.innerHTML = allPokemon[i].name;
    newNumber.innerHTML = "#" + allPokemon[i].num;

    //imprime dentro del HTML todos los nuevos <div> dentro de la etiqueta "cards-container"
    document.getElementById("cards-container").appendChild(newElement).innerHTML;
};

//ordenar ascendente
  sortPokemon.addEventListener("change", ()=>{
    container.innerHTML="";
    let condition = sortPokemon.options[sortPokemon.selectedIndex].value;
    for (let i = 0 ; i < data.length ; i++){
      if (condition === "A-Z"){
          nameUp();
            let newElement = document.createElement('div');
            newElement.id = data[i].name;
            newElement.className = "pokemon-card";
            let newImage = document.createElement('IMG');
            newImage.setAttribute("src", data[i].img)
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
      }
  
      else if (condition === "Z-A") {
        nameDown();
        let newElement = document.createElement('div');
        newElement.id = data[i].name;
        newElement.className = "pokemon-card";
        let newImage = document.createElement('IMG');
        newImage.setAttribute("src", data[i].img)
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
      }
    
      else if (condition === "1-151") {
        numUp();
        let newElement = document.createElement('div');
        newElement.id = data[i].name;
        newElement.className = "pokemon-card";
        let newImage = document.createElement('IMG');
        newImage.setAttribute("src", data[i].img)
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
      }

        else if (condition === "151-1") {
        numDown();
        let newElement = document.createElement('div');
        newElement.id = data[i].name;
        newElement.className = "pokemon-card";
        let newImage = document.createElement('IMG');
        newImage.setAttribute("src", data[i].img)
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
      }

    }
  });

//Filtar Pokemones 
/*
var filterConditionType = 


var filterPokemon = arr.filter(and(treeFilter, colorsFilter));

console.log(filteredArray);)
*/  




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

function buscarPokemon() {

  // capturar palabra a buscar 
  let nombreBuscar = document.getElementById("searchPokemon").value;
  // La variable siempre se deben intentar definir fuera de los ciclos
 let nombrePokemon;

  // Borra los datos pintados
  container.innerHTML = "";

  for (let i = 0 ; i < data.length ; i++) {
    nombrePokemon = data[i].name;

    // comparación entre nombre buscado y nombre del pokemon actual
    var resultado = nombrePokemon.localeCompare(nombreBuscar);

    if ( resultado == 0 ) {
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


      //console.log(data.length);
      return;
    } 

    if ( i + 1 == data.length ) {
      alert("pokemon no encontrado");
      //console.log("Condición de término: "+ (i + 1) );
    }
    console.log("despues del If: " +  data.length);
  }
}


filterPokemon.addEventListener("change", ()=>{

  
  //obtener tipo

  //definimos variable que contendrá los redultados del mismo tipo

  // recorrer data set
    // si los tipos son iguales 
     // agregamos pokemon a estructura de datos

  // finaliza ciclo

  // Recorrer estructura que contiene los pokemones del mismo tipo
    // todos los datos

    let tipoPokemon = filterPokemon.options[filterPokemon.selectedIndex].value;
    alert("El tipo de pokemon es: " + tipoPokemon);

    let pokemones;

    for (let i = 0 ; i < data.length ; i++) {
      console.log("Dentro del for");
      let comparacion = tipoPokemon.localeCompare(data[i].type);
      console.log(data[i].type);
      console.log(comparacion);
      if (comparacion == 0) {
          console.log("Dentro del if");
          pokemones = data[i];
          console.log("Se agregó el pokemón: " + data[i]);
      }
    }

    console.log("Cantidad de pokemones agregados: " + pokemones.length);

/*
    for (let i = 0 ; i < pokemones.length ; i++) {



    }*/

});