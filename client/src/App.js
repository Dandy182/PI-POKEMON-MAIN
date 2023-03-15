import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Componets/LandingPage';
import '../src/index.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Landing /></Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
