import React from 'react';
import Header from '../../components/Header';
import FormCompany from '../../components/FormCompany';
import './style.css';

const Company = () => {
    return (
        <>
            <Header/>

            <div className='content-company'>
                       
                <FormCompany/>

            </div>
        </>
    )
}


export default Company;