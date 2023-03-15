import { Link } from "react-router-dom";
import Logo from "../img/pngegg.png";
import "../home.css"

export default function Home(){

    return(<div className="homePage">
        <div className="headBar">
            <div className="contenedor">
                <Link to='/'>
                    <img src={Logo} className='headBar__logo' alt="logo" />
                </Link>
            </div>
        </div>


        
    </div>)
}