import Pokedexlist from "../components/Pokedexlist"; 
import './dex.css'
import Navi from "./Navbar";

function Pokedex(props){
    return <div className="header">
            <Navi/>
            < Pokedexlist/>

    </div>; 
    
}
export default Pokedex;