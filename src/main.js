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
    pokeCard.setAttribute("value" , arr[i].id);
    pokeCard.className = "modal-opener pokemon-card";

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
let pokemonContainer = document.querySelectorAll("div.pokemon-card");
pokemonContainer.forEach(element => {
  element.addEventListener("click", () => {
    let pokeInfo = getPokeById(arr, element.getAttribute("value"));
    //console.log(pokeInfo);
    let pokeNameTitle = document.getElementById("name-title");
    pokeNameTitle.innerHTML = " ";
    let modalTitle = document.createElement("p");
    modalTitle.innerHTML = modalTitle.setAttribute("id", "modal-title");
    modalTitle.innerHTML = pokeInfo.name;

    let pokeImage = document.getElementById("modal-img");
    pokeImage.innerHTML = "";
    let modalImg = document.createElement("img");
    modalImg.innerHTML = modalImg.setAttribute("src", pokeInfo.img)
    modalImg.innerHTML = modalImg.setAttribute("alt", "pokemon-image");

    let pokeDetail = document.getElementById("poke-detail");
    pokeDetail.innerHTML = "";
    let modalNumber = document.createElement("p");
    modalNumber.innerHTML = pokeInfo.num;
    let modalHeight = document.createElement("p");
    modalHeight.innerHTML = pokeInfo.height;
    let modalWeight = document.createElement("p");
    modalWeight.innerHTML = pokeInfo.weight;

    let typeList = document.createElement("div");
    typeList.id= "type-list";
    typeList.innerHTML = "";
    pokeInfo.type.forEach(type => {
    let typeClass = type.toLowerCase();
    typeList.innerHTML += "<li class=\"type-list types type-box "+typeClass+"\">"+type+"</li>";
    });

    let weaknessList = document.createElement("div");
    weaknessList.id= "weaknessList";
    weaknessList.innerHTML = "";
    pokeInfo.weaknesses.forEach(weak => {
    let typeClass = weak.toLowerCase();
    weaknessList.innerHTML += "<li class=\"weakness-list types type-box "+typeClass+"\">"+weak+"</li>";
    });

    let otherDetail= document.getElementById("other-detail");
    otherDetail.innerHTML = "";
    let modalCandy = document.createElement("p");
    modalCandy.innerHTML = pokeInfo.candy;
    let modalCandyCount = document.createElement("p");
    modalCandyCount.innerHTML = pokeInfo.candy_count;
    let modalEgg = document.createElement("p");
    modalEgg.innerHTML = pokeInfo.egg;

    let otherDetailTwo= document.getElementById("other-detail-two");
    otherDetailTwo.innerHTML = "";
    let modalSpawnChance = document.createElement("p");
    modalSpawnChance.innerHTML = pokeInfo.spawn_chance;
    let modalAvg = document.createElement("p");
    modalAvg.innerHTML = pokeInfo.avg_spawns;
    let modalTime = document.createElement("p");
    modalTime.innerHTML = pokeInfo.spawn_time;
    let modalMultipliers = document.createElement("p");
    modalMultipliers.innerHTML = `${pokeInfo.multipliers}`;

    pokeNameTitle.appendChild(modalTitle);
    pokeImage.appendChild(modalImg);
    pokeDetail.appendChild(modalNumber);
    pokeDetail.appendChild(modalHeight);
    pokeDetail.appendChild(modalWeight);
    pokeDetail.appendChild(typeList);
    pokeDetail.appendChild(weaknessList);
    otherDetail.appendChild(modalCandy);
    otherDetail.appendChild(modalCandyCount);
    otherDetail.appendChild(modalEgg);
    otherDetailTwo.appendChild(modalSpawnChance);
    otherDetailTwo.appendChild(modalAvg);
    otherDetailTwo.appendChild(modalTime);
    otherDetailTwo.appendChild(modalMultipliers);
  })
})
};
//ordenar por nombre y tipo
const sortPokemon = document.getElementById("sort-Pokemon");
sortPokemon.addEventListener("change", ()=>{
  container.innerHTML="";
  pokemonPorcent.innerHTML="";
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
    pokemonPorcent.innerHTML="";
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