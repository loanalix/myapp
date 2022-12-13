import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { getAll, Update } from "../api/pokemon";




export function UpdateForm(props){

const { register, handleSubmit } = useForm();
const onSubmit = async (data) => {
    Update(data);

}
useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();

    pokemonsFetched
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("_id")} type="hidden"  defaultValue={props.Pokemon._id}/>
        <input {...register("name")} defaultValue={props.Pokemon.name}/>
        
        <button type="submit">Modifier</button>
</form>

    
}       
                
    