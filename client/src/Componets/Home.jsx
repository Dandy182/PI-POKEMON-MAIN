import React from 'react';
import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import '../css/cards.css';


import Card from "./Card";
import {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons, filterByOrigen } from '../actions';
import { NavLink } from 'react-router-dom';
import Page from './paginado';


export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)

    //console.log(allPokemons)
    
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const [pkmnsXPage] = useState(12);

    const indexLastInPage = currentPage * pkmnsXPage;
    const indexFirstInPage = indexLastInPage - pkmnsXPage;

    const pokemonsCurrent = allPokemons.slice(indexFirstInPage, indexLastInPage);

    const paginate = (numero) =>{
        setCurrentPage(numero)
    }


    const handlePrev = (e) => {
        e.preventDefault();
        if(currentPage === 1){

        }else{
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = (e) =>{
        e.preventDefault();
        setCurrentPage(currentPage + 1)
    }


    const handleFilterByOrigin = (e) =>{
        dispatch(filterByOrigen(e.target.value))
    }



    return(<div className="homePage">

        <UpperBar />
        
         <div className="contenedor contenido__cards">

        <NavLink to='/pokemons' className="btn">
            Crear Pokémon
        </NavLink>

        <select className='btn'>
            <option value='asc'>Ascendente</option>
            <option value='desc'>Desendente</option>
        </select>

        <select onClick={ (e) => handleFilterByOrigin(e)} >
            <option value='all'>All</option>
            <option value='api'>Api</option>
            <option value='created'>Created</option>
        </select>

        </div>
        
        <div className='contenedor paginateModule'>
            <button onClick={handlePrev}>Prev</button>
            <Page allPokemons={allPokemons} pkmnsXPage={pkmnsXPage} paginate={paginate} currentPage={currentPage}  />
            <button  onClick={handleNext}>Next</button>
        </div>

        <main className="contenedor contenido__cards">
            {   pokemonsCurrent.map(p =>{
                //console.log(p)
                    return <NavLink to={`/detail/${p.name}`} className='link-card' key={p.id}>
                        <Card name={p.name}
                        img={p.img} 
                        type={p.types}
                     />
                    </NavLink>
                })
            }
  </main>
      
    </div>)
}