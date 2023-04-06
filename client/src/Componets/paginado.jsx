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

  const handleNext = () =>{

    if(numsList.length === numXpage){
      setCurrentList(currentList + 1)
    }
  }

  const handlePrev = () =>{
    if(currentList > 1){
      setCurrentList(currentList - 1)
    }

  }
  


  return(<div className="paginate">
    <ul>
      <li>
        <button className="paginateBtn" onClick={() => handlePrev()}>...</button>
      </li>

      {
          numsList.map(p => <li key={p}>
          <button className="paginateBtn" onClick={() => paginate(p)}>{p}</button>
        </li>)
      }
      
      <li>
        <button className="paginateBtn" onClick={() => handleNext()}>...</button>
      </li>
    </ul>
  </div>)
}