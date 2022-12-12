import React, { useState } from 'react';
import {useForm} from "react-hook-form";
function AddPokemon() {
    const { register, handleSubmit } = useForm();
    const [ ff, setff ] = useState(0);
    
    const onSubmit = async (data) => {
    console.log(data);
        const response = await fetch(
            'http://localhost:4444/pokemon/insert', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
    
            }
        )
        const result = await response.json()
        return result
    
    

    /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
    //On peut transformer les données en JSON pour les envoyer dans notre appel
    //JSON.stringify(data);
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="name"/>
      <select {...register("Types", { required: true })}>
        <option value="">Type</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Eau">Eau</option>
        <option value="Plante">Plante</option>
        <option value="Electrique">Electrique</option>
        <option value="Acier">Acier</option>
        <option value="Dragon">Dragon</option>
        <option value="Insecte">Insecte</option>
        <option value="Spectre">Spectre</option>
        <option value="Ténèbre">Ténèbre</option>
        <option value="Fée">Fée</option>
        <option value="Sol">Sol</option>
        <option value="Roche">Roche</option>
        <option value="Vol">Vol</option>
        <option value="Combat">Combat</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Poison</option>
        <option value="Psy">Psy</option>
      </select>
      <select {...register("Types2", { required: true })}>
        <option value="">Type2</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Eau">Eau</option>
        <option value="Plante">Plante</option>
        <option value="Electrique">Electrique</option>
        <option value="Acier">Acier</option>
        <option value="Dragon">Dragon</option>
        <option value="Insecte">Insecte</option>
        <option value="Spectre">Spectre</option>
        <option value="Ténèbre">Ténèbre</option>
        <option value="Fée">Fée</option>
        <option value="Sol">Sol</option>
        <option value="Roche">Roche</option>
        <option value="Vol">Vol</option>
        <option value="Combat">Combat</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Poison</option>
        <option value="Psy">Psy</option>
        <option value="pure">pure</option>
      </select>
      <button type="submit"onClick={()=>{
                
                setff(ff+1)
            }} >Valider</button>
    </form>
  );
}
  
    
 export default AddPokemon;