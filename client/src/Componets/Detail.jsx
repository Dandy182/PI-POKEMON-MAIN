import { useEffect } from 'react'
import '../css/detail.css'
import UpperBar from "./upperBar"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById } from '../actions';
import { useParams } from 'react-router-dom';



export default function PokemonDetail ({match}){

    const { id } = useParams();
    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.detail)
    console.log(pokemon)
    
    useEffect(()=>{
        dispatch(getPokemonById(id));
    },[dispatch]);

    return(<div className='pokemon__detail'>
        <UpperBar />

        <div className="contenedor contenido__cards">
                {
                    pokemon.length > 0 ? (<div className='pokemonDetail'>
                        <h1>{pokemon[0].name}</h1>
                        <div className='detailsData'>
                            <img src={pokemon[0].img} alt={pokemon[0].name} />
                            <div className='detailsInfo'>
                                <span>life: </span><p>{pokemon[0].hp}</p>
                                <span>attack: </span><p>{pokemon[0].atk}</p>
                                <span>defense: </span><p>{pokemon[0].atk}</p>
                                <span>speed: </span><p>{pokemon[0].speed}</p>
                                <span>height: </span><p>{pokemon[0].height}</p>
                                <span>weight: </span><p>{pokemon[0].weight}</p>
                                <span>type:</span>{pokemon[0].type ? pokemon[0].type.map((t, index) => <p key={index}>{t}</p>): pokemon[0].types.map((t, index) => <p key={index}>{t}</p>) }
                                
                            </div>
                        </div>

                    </div>) : <p className='charge'>Loading ...</p>
                } 
                
        </div>
        </div>)
}