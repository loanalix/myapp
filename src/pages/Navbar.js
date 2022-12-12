import React, {useState,useEffect} from 'react'
import './dex.css'

export default function Navbar(){

    const [toggleMenu, settoggleMenu]=useState(false);

    const toggleNavSmallScreen = () => {
        settoggleMenu(!toggleMenu); 
    }

    useEffect(() => {

        const changeWidht = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 500){
                settoggleMenu(false);
            }
        }
        
        window.addEventListener('resize',changeWidht);
        
        return () => {
            window.removeEventListener('resize',changeWidht);
        }
        
    },[])

    return(
        <nav>
            {toggleMenu &&(<ul classeName="liste">
                <li classeName="item">PokeListe</li>
                <li classeName="item">PokeDex</li>
                <li classeName="item">PokeAdd</li>
                <li classeName="item">PokeDel</li>
            </ul>)}
            <button onClick={toggleNavSmallScreen} classeName="BTN">BTN</button>
        </nav>
    )
}