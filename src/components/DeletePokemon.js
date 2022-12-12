import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import { Delete } from "../api/Pokemon";



function DeletePokemon(props){
  const [ pokemons, setPokemons ] = useState([]);
  const [ ff, setff ] = useState(0);

    //va s'executer seulement au lancement du composant (dep: [])
    const handleDelete = async (pokemon) => {
        await Delete(pokemon);
        setff(ff+1);
    }
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();

    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[ff]);
    
    return <div className="pokemon-list">
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.img} />
                <h2>{pokemon.name}</h2>
                <button onClick={()=>handleDelete(pokemon)}>Supprimer !</button>
            </div>
            })
        }
        </div>
    </div>;

}
export default DeletePokemon;
