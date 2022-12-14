import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { getAll } from "../api/pokemon";
import Navi from '../pages/Navbar';
import Formular from "./Formulaire";
function UpdatePokemon() {
   
    
  const [ pokemons, setPokemons ] = useState([]);
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();

    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
    <div class="flex">
        <Navi/>
      {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <Formular Pokemon={pokemon} />
          </div>
        })
      }
     </div>
</div>;
    
}
  
 export default UpdatePokemon;