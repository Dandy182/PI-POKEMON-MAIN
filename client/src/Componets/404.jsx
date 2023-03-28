import '../css/error.css';
import UpperBar from './upperBar';



export default function Error(){

  return(<div className="Error">
    <UpperBar />
    <div className='backgroundError'>
      <h1>Un Pokémon dormido bloquea el camino !!!</h1>
      <h1>Error 404</h1>
    </div>
  </div>)
}