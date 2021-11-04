import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

function HeaderResponsive(){
    const [active, setActive] = useState(false);
    function openMenu(event){
        setActive(!active); 
        event.preventDefault();
        console.log(active);
    }

    return (
        <div className = "header">
            <div className = "menu-hamburguer" onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} color = "#f4f4f4" size = "lg" />
            </div>
            <ul className = {`menu-options${active ? ' active' : ''}`}>
                <li><a href = "/">Home</a></li>
                <li><a href = "/personagens">Personagens</a></li>
                <li><a href = "/">Episódios</a></li>
                <li><a href = "/sobre">Sobre</a></li>

            </ul>
        </div>
    );
}

export default HeaderResponsive;