import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import Card from "./Card";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons } from '../actions';
import { NavLink } from 'react-router-dom';


export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.getAllPokemons)

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])

    return(<div className="homePage">
        <UpperBar />
        <div className='contenedor'>

        <NavLink to='/pokemons'>
            Crear Pokémon
        </NavLink>
        </div>
        <main className="contenedor contenido__cards">
            {
                allPokemons && allPokemons.map(p =>{
                    return <Card name={p.name} type={p.type} img={p.img} />
                })
            }
  </main>

        
    </div>)
}