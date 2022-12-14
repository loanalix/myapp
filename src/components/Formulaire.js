import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { getAll, Update } from "../api/pokemon";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
      <Row>
      <Col xs={12} md={3} lg={2} ><Form.Control  {...register("_id")} type="hidden"  defaultValue={props.Pokemon._id}/>     
        <Form.Control  {...register("name")} defaultValue={props.Pokemon.name}/></Col>
        <Col xs={12}  md={3} lg={2}><Form.Select aria-label="Default select example" {...register("Types", { required: true })}>
        <option value="">Type</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Eau">Eau</option>
        <option value="Plante">Plante</option>
        <option value="Electrik">Electrik</option>
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
        
        </Form.Select></Col>     
        
        
        <Col xs={12} md={3} lg={2}><Form.Select aria-label="Default select example" {...register("Types2", { required: true })}>
        <option value="">Type</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Eau">Eau</option>
        <option value="Plante">Plante</option>
        <option value="Electrik">Electrik</option>
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
        <option value="Pure">Pure</option>
        
        </Form.Select></Col>

        <Col xs={12}  md={3} lg={2}><input {...register("img")} placeholder="img"/></Col>

        </Row>
        <Row>
        
        
        
      
    <Col xs={12} lg={2}><Button type="submit">Modifier</Button></Col>
    </Row>
    </Container>

    
    </form>
  );
}

export default Formular;