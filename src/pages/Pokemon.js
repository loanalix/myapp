import Pokemonlist from "../components/Pokemonlist";
import Navi from "./Navbar";
import Container from 'react-bootstrap/Container';
import './dex.css'



function Pokemon(props){
    return <div> <Container>
      <img className="img" src="./image/Pokemon_logo.png"  alt="image"/>
  </Container>
       
        <Navi/>
        <Pokemonlist/>
     
    </div>;    
}
export default Pokemon;

