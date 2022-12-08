import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pokemon from "./components/Pokemonlist";
import Pokedex from "./components/Pokedexlist";

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
      </Switch>
  </Router>
}
export default App;
