import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getAll, Update } from "../api/pokemon";
import Button from 'react-bootstrap/Button';
function AddPokemon() {
    const { register, handleSubmit } = useForm();
    const [ ff, setff ] = useState([]);
    
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
      <div>
        <h1> Ajouter un Pokemon</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
       <Container>
      <Row>
        <Col xs={12}  md={3} lg={2}> <Form.Control {...register("name")} placeholder="name"/></Col>
        <Col xs={12}  md={3} lg={2}><Form.Select {...register("Types", { required: true })}>
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
      <Col xs={12}  md={3} lg={2}> <Form.Select {...register("Types2", { required: true })}>
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
        </Form.Select></Col>
      <Col xs={12}  md={3} lg={2}> <Form.Control {...register("img")} placeholder="img"/></Col>
      <Col xs={12}  md={3} lg={2}><button type="submit"onClick={()=>{
                
                
              }} >Valider</button></Col>
      

      </Row>
      
    </Container>
      
      
      
     


    
    </form>
    </div>
  );
}
  
    
 export default AddPokemon;