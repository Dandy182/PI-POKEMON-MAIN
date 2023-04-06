import React, {useState} from "react";
import '../css/paginado.css';


export default function Page({allPokemons, pkmnsXPage, paginate, currentPage }){
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(allPokemons.length / pkmnsXPage); i++){
    pageNumbers.push(i);
  }


  const [currentList, setCurrentList] = useState(1);
  const [numXpage] = useState(12);
  
  const indexLastInPage = currentList * numXpage;
  const indexStartPage = indexLastInPage - numXpage;
  
  const numsList = pageNumbers.slice(indexStartPage, indexLastInPage); 


  return(<div className="paginate">
    <ul>{
          numsList.map(p => <li key={p}>
          <button className="paginateBtn" onClick={() => paginate(p)}>{p}</button>
        </li>)
      }
    </ul>
  </div>)
}