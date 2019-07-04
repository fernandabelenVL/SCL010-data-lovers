/* Manejo de data */

let data = POKEMON.pokemon;
//ordenar de la A a la Z
function nameUp (){
data.sort(function(a, b){
  return a.name.localeCompare(b.name);
}); 
console.log(data);

};

//ordenar de la Z a la A
function nameDown (){
data.sort(function(a, b){
	return b.name.localeCompare(a.name);
});
console.log(data);
};

