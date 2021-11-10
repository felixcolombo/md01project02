import React from 'react';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import FormCompany from '../../components/FormCompany';
import './style.css';


const Company = ({history}) => {
    return (
        <>
            <Header/>

            <SubHeader title='Nova Empresa'>
                <button onClick={ ()=> history.goBack()}>Cancelar</button> 
                <input type='submit' value='Salvar'/>
            </SubHeader>

            <FormCompany/>
        </>
    )
}

export default Company;