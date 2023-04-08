import React from 'react';
import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import '../css/cards.css';


import Card from "./Card";
import {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons, filterByOrigin, filterByOrder, filterByAtk} from '../actions';
import { NavLink } from 'react-router-dom';
import Page from './paginado';


export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)
    //const allTypes = useSelector((state) => state.types);
     console.log(allPokemons)
    // console.log(allTypes)
    
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    const [order, setOrder] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [pkmnsXPage] = useState(12);
    const indexLastInPage = currentPage * pkmnsXPage;
    const indexFirstInPage = indexLastInPage - pkmnsXPage;
    const pokemonsCurrent = allPokemons.slice(indexFirstInPage, indexLastInPage);
    const paginate = (numero) =>{setCurrentPage(numero)}


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


    const handleFilterByOrigin = (e) => {
        e.preventDefault();
        //console.log(e.target.value)
        dispatch(filterByOrigin(e.target.value));
    }

    const handleOrderByName = (e) =>{
        e.preventDefault();
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }

    const handlefilterAtk = (e) =>{
        e.preventDefault();
        dispatch(filterByAtk(e.target.value));
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }


    return(<div className="homePage">

        <UpperBar />
        
         <div className="contenedor contenido__cards upperPanel">

        <NavLink to='/pokemons' className="newPkmn">
            Crear Pokémon
        </NavLink>


        <form className='filters'>
            <div>
                <label htmlFor="orderName">Order by Name: </label>
                <select className='btn' name='orderName' onChange={e => handleOrderByName(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Desendente</option>
                </select>
            </div>

            <div>
                <label htmlFor='atk'>Order by attack:</label>
                <select name='atk' onChange={e => handlefilterAtk(e)}>
                    <option value='strong'>Strong</option>
                    <option value='weak'>Weak</option>
                </select>
            </div>

            <div>
                <label htmlFor='OrdOrigin'>Filter by Origin:</label>
                <select name='OrdOrigin' onChange={e => handleFilterByOrigin(e)} >
                    <option value='all'>All</option>
                    <option value='api'>Api</option>
                    <option value='created'>Created</option>
                </select>
            </div>
         </form>

        </div> {/* fin filtros */}
        
        <div className='contenedor paginateModule'>
            <button onClick={handlePrev}>Prev</button>
            <Page allPokemons={allPokemons} pkmnsXPage={pkmnsXPage} paginate={paginate}/>
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