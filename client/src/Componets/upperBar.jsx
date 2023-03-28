 import { NavLink } from "react-router-dom";
 import Search from "./searchBar";
import Logo from "../img/pngegg.png";

 export default function UpperBar(){



    return(<div className="headBar">
    <div className="contenedor hb">
        <NavLink to='/' className='logoMin'>
            <img src={Logo} className='headBar__logo' alt="logo" />
        </NavLink>
        <Search />
    </div>
</div>)
 }