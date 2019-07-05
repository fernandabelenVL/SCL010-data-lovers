/*const sortData = (data, sortBy, condition) => {
  let arr = [];

  if (sortBy == "name"){

    if(condition === "nameUp"){
     
      arr = data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
      arr = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
  }
  else {
    if(condition === "numUp"){
      arr = data.sort(sortById);
    }
    else {
      arr = data.sort(sortById).reverse();
    }
  }
  return arr;
}*/

/* Manejo de data */

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


//ordenar de por ID
/*function sortbyId () {
data.sort(function(a,b){
  if (a.id > b.id) {
    return 1;
  } 
  else if (b.id > a.id) {
    return -1;
  } 
  else {
    return 0;
  }
})
}*/

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

