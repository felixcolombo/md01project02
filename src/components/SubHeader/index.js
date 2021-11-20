import React from "react";
import './style.css';
import PropTypes from 'prop-types';

function refreshPage(){ 
    window.location.reload(); 
}

const SubHeader = ({title, children}) => {
    return(
        <section className='subheader-container'>
            <h1 className='subheader-title'>{title}</h1>
            <div>
                <button className='btn-subHeader' type="button" onClick={ refreshPage }>Cancelar</button>
                <input className='btn-subHeader' type="submit" value="Salvar"/>
            </div>
        </section>
    );
};

SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SubHeader;