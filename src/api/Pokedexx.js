export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list/pokedex', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert/pokedex', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)

        }
    )
    const result = await response.json()
    return result
}

