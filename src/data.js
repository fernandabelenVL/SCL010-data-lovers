let data = window.POKEMON.pokemon;

//filtrar por nombre y número
const sortBy = (data, condition) => {
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
//funcion ordenar por número
function ordenByNumber (a, b) {
  return a.id - b.id;
}

//Filtrar por Tipo
const filterTypesPokemon = (type) => {
data = POKEMON.pokemon;
let filter = [];
let i ="";
  for ( i = 0; i < data.length; i++) {
      if (data[i].type[0] == type) {
          filter.push(data[i]);
      } else if (data[i].type[1] == type) {
          filter.push(data[i]);
      }
  }
return filter;
}
window.filterTypesPokemon = filterTypesPokemon;