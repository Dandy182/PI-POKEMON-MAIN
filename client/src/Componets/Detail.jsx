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
            <div className='detail'>
                
            </div>
        </div>
        </div>)
}