import { NavLink } from "react-router-dom";
import Logo from "../img/pngegg.png";
import '../css/home.css';
import Search from "./searchBar";
import Cards from "./Cards";

export default function Home(){

    return(<div className="homePage">
        <div className="headBar">
            <div className="contenedor hb">
                <NavLink to='/' className='logoMin'>
                    <img src={Logo} className='headBar__logo' alt="logo" />
                </NavLink>
                <Search />
            </div>
        </div>

            <Cards />

        
    </div>)
}