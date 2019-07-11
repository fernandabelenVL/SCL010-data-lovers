
global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon');
require('../src/data.js');
require('./data.spec.js');

const testData = [
  { "id": 1,
    "num": "001",
    "egg": "2 km",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]}, 
  { "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": [
      "Normal"
    ]},
  { "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": [
      "Normal"
    ]}
  ];

describe('sortBy', () => {

  it('debería ser una function', () => {
    assert.equal(typeof window.sortBy, 'function');
  })
  
  it('debería retornar los pokemones ordenado de la A a la Z', () => {
  assert.deepEqual(window.sortBy(testData,'A-Z'),[
  { 
    "id": 1,
    "num": "001",
    "egg": "2 km",
    "name": "Bulbasaur",
    "type": ["Grass","Poison"]
  }, 
  { 
    "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
  },
  { 
    "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": ["Normal"]

  }])
})

it('debería retornar los pokemones ordenado de la Z a la A', () => {
  assert.deepEqual(window.sortBy(testData,'Z-A'),[
  { 
    "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": ["Normal"]
  }, 
  { 
    "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
  },
  { 
    "id": 1,
    "num": "001",
    "egg": "2 km",
    "name": "Bulbasaur",
    "type": ["Grass","Poison"]
  }])
})

it('debería retornar los pokemones ordenado de la 1-151', () => {
  assert.deepEqual(window.sortBy(testData,'1-151'),[
  { 
    "id": 1,
    "num": "001",
    "egg": "2 km",
    "name": "Bulbasaur",
    "type": ["Grass","Poison"]
  }, 
  { 
    "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
  },
  { 
    "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": ["Normal"]
  }])
})

it('debería retornar los pokemones ordenado de la 151-1', () => {
  assert.deepEqual(window.sortBy(testData,'151-1'),[
  { 
    "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": ["Normal"]
  }, 
  { 
    "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
  },
  { 
    "id": 1,
    "num": "001",
    "egg": "2 km",
    "name": "Bulbasaur",
    "type": ["Grass","Poison"]
  }])
})
});

describe('filterTypes', () => {

  it('debería ser una function', () => {
  assert.equal(typeof window.filterTypes, 'function');
  });

  it('debería retornar el objeto Bulbasaur al filtrar por type Poison' , () => {
  assert.deepEqual(window.filterTypes(testData, "Poison"),[
  {
  "id": 1,
  "num": "001",
  "egg": "2 km",
  "name": "Bulbasaur",
  "type": ["Grass","Poison"]
  }
])
});

})

describe('filterTypesegg', () => {

  it('debería ser una function', () => {
  assert.equal(typeof window.filterTypesegg, 'function');
  });

  it('debería retornar el objeto Bulbasaur al filtrar por huevos de 2 Km' , () => {
  assert.deepEqual(window.filterTypesegg(testData, '2 km'),[
  {
  "id": 1,
  "num": "001",
  "egg": "2 km",
  "name": "Bulbasaur",
  "type": ["Grass","Poison"]
  }
])
});

})

describe ('calcPercent', ()=> {
  it('deberia ser una funcion', () => {
    assert.equal(typeof calcPercent, 'function')
  });

  it('deberia retornar 28% al calcular huevos de 5km', () => {
    assert.equal(window.calcPercent((window.filterTypesegg(window.data, '5 km')) , window.data) ,"28")
  });
})