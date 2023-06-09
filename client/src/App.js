import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Componets/LandingPage';
import Home from './Componets/Home';
import Error from './Componets/404';
import '../src/index.css'
import PokemonDetail from './Componets/Detail';
import PokemonCreate from './Componets/PokemonCreate';


function App() {


  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route path='/detail/:id'><PokemonDetail /></Route>
          <Route exact path="/create"><PokemonCreate /></Route>
          <Route path="*"><Error /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
