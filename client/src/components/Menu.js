import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="generate">Generate Data</NavLink></li>
                    <li><NavLink to="time">Aggregation Time</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;