
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
           <nav>
               <ul>
                   <li> <Link to="/">Login</Link></li> 
                   <li> <Link to="/market-list">Market List</Link></li>
               </ul>
            </nav> 
        </header>
    )
}

export default Header
