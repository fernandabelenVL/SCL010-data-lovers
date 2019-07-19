
//filtrar por nombre y número
let sortBy = (data, condition) => {
  let orderPokemon = "";
  if (condition === 'A-Z') {
    orderPokemon = data.sort ((a,b) => a.name.localeCompare(b.name));
  }
  else if (condition === 'Z-A') {
    orderPokemon = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
  }
  else if (condition === '1-151') {
    orderPokemon = data.sort(ordenByNumber);
  }
  else if (condition === '151-1') {
    orderPokemon = data.sort(ordenByNumber).reverse();
  }
  return(orderPokemon);
  //console.log(orderPokemon);
}
sortBy();
window.sortBy = sortBy;

//funcion ordenar por número
function ordenByNumber (a, b) {
  return a.id - b.id;
}

//filtrar por tipo de pokemon
const filterTypes = (data, type) => {
  let filterPokemon = data.filter(element => {
    // crea array nuevo con cada objeto que incluya el tipo "condition"
    return element.type.includes(type);
  });
  return filterPokemon;
};
window.filterTypes = filterTypes;

//Filtrar por tipo de huevo
const filterTypesegg = (data, egg ) => {
  let filterPokemonegg = data.filter(element => {
    // crea array nuevo con cada objeto que incluya el tipo "condition"
    return element.egg.includes(egg);
  });
  return filterPokemonegg;
};
window.filterTypesegg = filterTypesegg;

//calculo de porcentajes
const calcPercent = (calcu, data) => {
let resultCalc = Math.round((calcu.length * 100) / data.length );
return resultCalc;
} 
window.calcPercent= calcPercent;

  //Get pokemon by id
  const getPokeById = (data, id) => {
    let idPoke = data.find(element => {
    return element.id == id;
    })
    return idPoke;
  }

  window.getPokeById = getPokeById;
  
