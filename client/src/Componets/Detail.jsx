import { useEffect } from 'react'
import '../css/detail.css'
import UpperBar from "./upperBar"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById } from '../actions';



export default function PokemonDetail (props){

    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.detail)

    useEffect(() =>dispatch(getPokemonById(props.match.params.id)),[dispatch])


    return(<div className='pokemon__detail'>
        <UpperBar />

        <div className="contenedor contenido__cards">
            <div className='detail'>
               <h1>{pokemon[0].name}</h1>
               <div>

                <div className='img__pokemon'>
                    <img src={pokemon[0].img} alt={pokemon[0].name}/>
                </div>

                <div className='pokemon__data'>
                    <div>
                        <span>Name: </span> <p>{pokemon[0].name}</p>
                    </div>
                    <div>
                        <span>life: </span> <p>{pokemon[0].hp}</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
        </div>)
}