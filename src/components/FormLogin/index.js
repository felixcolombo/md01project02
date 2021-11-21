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
        return {errorUser: 'Usuário Incorreto!'};
    } else if (user === 'Paripassu' && password !=='Involves'){
        return {errorPassword: 'Senha Incorreta!'};
    } else if (user !== 'Paripassu' && password !=='Involves'){
        return {errorUser: 'Usuário Incorreto!', errorPassword: 'Senha Incorreta!'};
    }   
              
}

const FormLogin = () => {
    const [values, setValues] = useState(initialState);
    const [errorUser, setErrorUser] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
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

        const {key, errorPassword, errorUser} = login(values);

        if (key==='DevInHouse'){
            setKey('DevInHouse');
            return history.push('/map');
            
        } else {
            setErrorUser(errorUser);
            setErrorPassword(errorPassword);
            setValues(initialState);
        }

        
    }

    return (
        <div className='content'>
            
            <h1 className='title-login'>Acesso SGI</h1>

            <form className ='form-content' onSubmit={onSubmit}>
                <div className= 'container-login'>
                    <input
                        id='user'
                        type='text'
                        name="user"
                        value={values.user}
                        onChange={onChange}
                    />
                    <label>
                        Login
                    </label>
                              
                    {'user' !== 'Paripassu' && (
                        <div className='container-error'>{errorUser}</div>
                    )}
                
                </div>

                <div className= 'container-password'>
                    <input
                        id='password'
                        type='password'
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <label>
                        Senha
                    </label>
                </div>

                {'password' !== 'Involves' && (
                        <div className='container-error'>{errorPassword}</div>
                    )}
                
                <input className='btn-login' type="submit" value="Entrar"/>

            </form>
        </div>

    )
}


export default FormLogin;