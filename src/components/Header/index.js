import React, { useContext } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import StoreContext from '../StoreContext';

const Header = () => {
    const {setKey} = useContext(StoreContext)
    return(
        <header className='container-header'>
                
            <label className='logo-header'>SGI</label>

            <Link to='/map'>
                <button className='btn-header'>MAPA</button>
            </Link>

            <Link to='/product'>
                <button className='btn-header'>PRODUTOS</button>
            </Link>
                
            <Link to='/company'>
                 <button className='btn-header'>EMPRESAS</button>
            </Link>

            <button className='btn-header' onClick={() => setKey(null)}>SAIR</button>

                
        </header>
    )
}

export default Header;