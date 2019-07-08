let data = POKEMON.pokemon;

//ordenar de la A a la Z
function nameUp (){
data.sort(function(a, b){
  return a.name.localeCompare(b.name);
}); 
};
//ordenar de la Z a la A
function nameDown (){
data.sort(function(a, b){
	return b.name.localeCompare(a.name);
});
};
//ordenar numero ascendente
function numUp (){
  data.sort(function(a, b){
    return a.id - b.id
  });
}
//ordenar numero ascendente
function numDown (){
  data.sort(function(a, b){
    return b.id - a.id
  });
}

//Filtrar por Tipo
const filterTypesPokemon = (type) => {
data = POKEMON.pokemon;
let filter = [];
  for (i = 0; i < data.length; i++) {
      if (data[i].type[0] == type) {
          filter.push(data[i]);
      } else if (data[i].type[1] == type) {
          filter.push(data[i]);
      }
  }
return filter;
}
window.filterTypesPokemon = filterTypesPokemon;