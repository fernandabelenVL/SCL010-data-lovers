let data = window.POKEMON.pokemon;
window.data = data;

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

// data = array | type = tipo objeto poke
const filterTypes = (data , type) => {
  let filterPokemon = data.filter(element => {
    // crea array nuevo con cada objeto que incluya el tipo "condition"
    return element.type.includes(type)
  });
  return filterPokemon
};

window.filterTypes = filterTypes;

//Filtrar por tipo de huevo y sacar el % 
const filterTypesegg = (data , egg ) => {
  let filterPokemonegg = data.filter(element => {
    // crea array nuevo con cada objeto que incluya el tipo "condition"
    return element.egg.includes(egg)
  });
  return filterPokemonegg
};

window.filterTypesegg = filterTypesegg;

// //Filtrar por Tipo
// const filterTypesPokemon = (type) => {
// let data = window.POKEMON.pokemon;
// let filter = [];
// let i ="";
//   for ( i = 0; i < data.length; i++) {
//       if (data[i].type[0] == type) {
//           filter.push(data[i]);
//       } else if (data[i].type[1] == type) {
//           filter.push(data[i]);
//       }
//   }
// return filter;
// }
// window.filterTypesPokemon = filterTypesPokemon;

const calcPercent = (value, data) =>{
  let resultCalc = Math.round((value.length * 100) / data.length );
  return resultCalc;
} 
window.calcPercent= calcPercent;
