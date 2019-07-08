global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('orderPokemon', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.orderPokemon, 'function');
  });
  it('debería retornar los pokemones ordenado de la A a la Z', () => {
    assert.deepEqual(window.(data, "name", "az"), [
      {
        "id": 1,
        "num": "001",
        "egg": "2 km",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      }, {
        "id": 52,
        "num": "052",
        "egg": "5 km",
        "name": "Meowth",
        "type": [
          "Normal"
        ]
      }, {
        "id": 128,
        "num": "128",
        "egg": "5 km",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }
    ]);
  });

  it('deberia retornar el mismo arreglo', () =>{
    assert.deepEqual(window.orderPokemon([{x : "A"}, {x : "A"}], "x", "az"), [{x : "A"}, {x : "A"}]);
  });

  it('debería retornar los pokemones ordenado de la Z a la A', () => {
    assert.deepEqual(window.orderPokemon(data, "name", "za"), [
      {
        "id": 128,
        "num": "128",
        "egg": "5 km",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }, {
        "id": 52,
        "num": "052",
        "egg": "5 km",
        "name": "Meowth",
        "type": [
          "Normal"
        ]
      }, {
        "id": 1,
        "num": "001",
        "egg": "2 km",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      }
    ]);
  });

})

