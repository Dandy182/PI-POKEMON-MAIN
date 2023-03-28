import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Componets/LandingPage';
import Home from './Componets/Home';
import Error from './Componets/404';
import '../src/index.css'
import PokemonDetail from './Componets/Detail';



function App() {


  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact Path='/pokemons/id'><PokemonDetail /></Route> 
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
