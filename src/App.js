import Home from "./pages/Home";
import Add from "./pages/AddPokemon";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import AddPokemon from "./pages/AddPokemon";
import DeletePokemon from "./components/DeletePokemon";
import UpdatePokemon from "./components/UpdatePokemon";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formular from "./components/Formulaire";
//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/home"> 
          < Home/> 
        </Route>
        <Route exact path="/pokemon"> 
          < Pokemon/> 
        </Route>
        <Route exact path="/pokedex"> 
          < Pokedex/> 
        </Route>
        <Route exact path="/addpokemon"> 
          < AddPokemon/> 
        </Route>
        <Route exact path="/deletepokemon"> 
          < DeletePokemon/> 
        </Route>
        <Route exact path="/updatepokemon"> 
          < UpdatePokemon/> 
        </Route>
        <Route exact path="/formulaire"> 
          < Formular/> 
        </Route>
        

      </Switch>
  </Router>
 
}
export default App;
