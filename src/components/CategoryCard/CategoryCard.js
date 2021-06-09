import './CategoryCard.css'
import {Link} from 'react-router-dom'


export const CategoryCard = (props) => {

    return(
        <div className="divCategory" id={props.category}>
            <h3>{props.title}</h3>
            <Link to ={`/category/${props.category}`}> 
            <img className="iconoCategory" src={props.image} alt=""/>
            </Link>
        </div>
    )

}