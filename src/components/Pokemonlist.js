import { useEffect, useState } from "react";
import { addToPokedex } from "../api/Pokedexx";
import { getAll } from "../api/pokemon";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'


function Pokemonlist(props){
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
             
             <Container>
             
             
              <Row>
              <Col s={12} md={4} lg={2}><img className="avatar" src={pokemon.img} /></Col>
              <Col s={12} md={4} lg={2}> <h2>{pokemon.name}</h2>
            
            <button onClick={()=>addToPokedex(pokemon)
            }>Capturer !</button></Col>
            </Row>
            
           
          </Container>
          
          </div>
        })
      }
     </div>
</div>;

}
export default Pokemonlist;





