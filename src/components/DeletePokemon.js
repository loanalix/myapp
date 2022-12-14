import { useEffect, useState } from "react";
import { getAll } from "../api/pokemon";
import { Delete } from "../api/pokemon";
import Navi from "../pages/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
            <Navi/>
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <Container>
                    <Row>
                    <Col s={12} md={4} lg={2}><img className="avatar" src={pokemon.img} /></Col>
                    <Col s={12} md={4} lg={2}><h2>{pokemon.name}</h2></Col>
                    </Row>
                </Container>
                <button onClick={()=>handleDelete(pokemon)}>Supprimer !</button>
            </div>
            })
        }
        </div>
    </div>;

}
export default DeletePokemon;
