let search_input = document.getElementById('search_input')
let container = document.getElementById('container')
// let search_button = document.getElementById('search_button')

let json = JSON.parse(poke_file)
let pokemons = json.result


function search() {
  console.log(search_input.value)
  let pokemon = search_pokemon(search_input.value)

  if (pokemon == undefined)
    pokemon = search_byNumber(search_input.value)

  container.innerHTML = `

    <img src="${pokemon.ThumbnailImage}" alt="">

    <p>
        Nombre: ${pokemon.name}<br/>
        Numero: ${pokemon.number}<br/>
        Tipo: ${pokemon.type}
            
    </p>
    `
}

function search_byNumber(pokemon_number) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].number == pokemon_number) {
      return pokemons[i]
    }
  }
}

function search_pokemon(pokemon_name) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].slug == pokemon_name.toLowerCase()) {
      return pokemons[i]
    }
  }
}

console.log(pokemons)






// let search_input = document.getElementById("search_input")
// let container = document.getElementById("container")

// let json = JSON.parse(file)
// let personajes = json.results


// function search() {
//   console.log(search_input.value)
//   let personaje = search_personaje(search_input.value)

//   container.innerHTML = `
//   <p>
//     Nombre: ${personaje.name}
//     Tamaño: ${personaje.height}
//     Género: ${personaje.gender}
//   </p>

//   `
// }

// function search_personaje(personaje_name) {
//   for(let i = 0; i<personajes.length; i++) {
//     //console.log(personajes[i].name)

//     if(personajes[i].name == personaje_name) {
//       return personajes[i]
//     }
//   }
// }

// console.log(personajes)