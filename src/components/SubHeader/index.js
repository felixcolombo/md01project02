import React from "react";
import './style.css';
import PropTypes from 'prop-types';

const SubHeader = ({title}) => {
    return(
        <section className='subheader-container'>
            <h1 className='subheader-title'>{title}</h1>
            {/*{children}*/}
        </section>
    );
};

SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SubHeader;