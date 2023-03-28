import UpperBar from '../Componets/upperBar'
import '../css/home.css';
import Cards from "./Cards";

export default function Home(){

    return(<div className="homePage">
        <UpperBar />
            <Cards />

        
    </div>)
}