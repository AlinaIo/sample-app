import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><a className="active" href="generate">Generate Data</a></li>
                    <li><a href="time">Aggregation Time</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Menu;