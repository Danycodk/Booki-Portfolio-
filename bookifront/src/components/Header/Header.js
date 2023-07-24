import  styles from "./Header.module.scss";
import logo from "../../assets/images/Logo.png" ;
import React from 'react';
function Header(){

    return (
        <>
        <header>
            <figure  className={styles.header}> 
                <img src={logo} alt="logo booki" />
            </figure>
            <nav>
                <ul>
                    <li> Hébergements </li>
                    <li> Activités  </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header ;