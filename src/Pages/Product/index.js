import React from 'react';
import Header from '../../components/Header';
import FormProduct from '../../components/FormProduct';
import './style.css';

const Product = () => {
    return (
        <>
            <Header/>

            <div className='content-product'>            
                <FormProduct/>
            </div>
        </>
    )
}


export default Product;