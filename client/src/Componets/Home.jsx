import React from 'react';
import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import '../css/cards.css';

import Card from "./Card";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons } from '../actions';
import { NavLink } from 'react-router-dom';


export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])

    return(<div className="homePage">
        <UpperBar />
        <div className='contenedor'>

        <NavLink to='/pokemons'>
            Crear Pokémon
        </NavLink>

        <select>
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
            {
                allPokemons && allPokemons.map(p => {
                 return  <Card name={p.name} img={p.img} type={p.type} />
                })
            }
  </main>

        
    </div>)
}