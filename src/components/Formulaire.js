import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { getAll, Update } from "../api/pokemon";
import Button from 'react-bootstrap/Button';

function Formular(props) {
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   
      
        <Form.Control  {...register("_id")} type="hidden"  defaultValue={props.Pokemon._id}/>     
        <Form.Control  {...register("name")} defaultValue={props.Pokemon.name}/>
        
        
      
      <Button type="submit">Modifier</Button>

    
    </form>
  );
}

export default Formular;