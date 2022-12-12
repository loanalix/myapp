import { useEffect, useState } from "react";
import { getAll } from "../api/Pokedexx";

function Pokedexlist(props){
    const [ pokemons, setPokemons ] = useState([]);
    
    
  
  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);
  return <div className="pokemon-list">
      <div class="flex">
        {
          pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
              <img className="avatar" src={pokemon.img} />
              <h2>{pokemon.name}</h2>
            </div>
          })
        }
       </div>
  </div>;
}
export default Pokedexlist;