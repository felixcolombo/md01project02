import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import StoreContext from '../StoreContext';
import './style.css';


function initialState() {
    return {user: '', password: '', key:null};

}

function login ({user, password}) {
    if (user === 'Paripassu' && password ==='Involves') {
        return {key: 'DevInHouse'};
    } else if (user !== 'Paripassu' && password ==='Involves'){
        return {error: 'Usuário Incorreto!'};
    } else if (user === 'Paripassu' && password !=='Involves'){
        return {error: 'Senha Incorreta!'};
    } else if (user !== 'Paripassu' && password !=='Involves'){
        return {error: 'Usuário e Senha Incorretos!'};
    }   
              
}

const FormLogin = () => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const {setKey} = useContext(StoreContext);
    const history = useHistory();

    function onChange(event){
        const {value, name} = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const {key, error} = login(values);

        if (key==='DevInHouse'){
            setKey('DevInHouse');
            return history.push('/company');
            
        } else {
            setError(error);
            setValues(initialState);
        }

        
    }

    return (
        <div className='content'>
            
            <form className='container-formlogin' onSubmit={onSubmit}>
                <label>
                    Login:
                    <input
                        id='user'
                        type='text'
                        name="user"
                        value={values.user}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Senha:
                    <input
                        id='password'
                        type='password'
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <div>
                    {error && (
                        <div className='container-error'>{error}</div>
                    )}
                </div>
                
                <input type="submit" value="Entrar"/>

            </form>
        </div>

    )
}


export default FormLogin;