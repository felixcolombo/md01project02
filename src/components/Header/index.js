import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className='container-header'>
            
            <button>SGI</button>
            <Link to='/map'>
                <button>Mapa</button>
            </Link>
            <button>Produtos</button>
            <Link to='/company'>
                <button>Empresas</button>
            </Link>
        </header>
    )
}

export default Header;