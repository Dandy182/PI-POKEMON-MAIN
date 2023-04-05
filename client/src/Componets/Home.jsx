import React from 'react';
import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import '../css/cards.css';

import Card from "./Card";
import {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons } from '../actions';
import { NavLink } from 'react-router-dom';


export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)

    //console.log(allPokemons)
    
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    const [currentPage, setCurrent] = useState(1);
    const [pkmPerPage, setPkmnPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pkmPerPage;
    const indexOfFirstPkmn = indexOfLastPokemon - pkmPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPkmn, indexOfLastPokemon);


    const paginado = (pageNumber) =>{
        setCurrent(pageNumber)
    }
    return(<div className="homePage">
        <UpperBar />
        <div className="contenedor contenido__cards">

        <NavLink to='/pokemons' className="btn">
            Crear Pokémon
        </NavLink>

        <select className='btn'>
            <option disabled selected>Order By</option>
            <option value='asc'>Ascendente</option>
            <option value='desc'>Desendente</option>
        </select>

        <select>
            <option disabled selected>Origen</option>
            <option value='api'>Api</option>
            <option value='db '>Creados</option>
        </select>
        </div>
        <main className="contenedor contenido__cards">
            {   allPokemons.map(p =>{
                    return <NavLink to={`/detail/${p.name}`} className='link-card'>
                        <Card name={p.name}
                        img={p.img} 
                        type={p.types}
                        key={p.id} />
                    </NavLink>
                })
            }
  </main>

        
    </div>)
}