import React, {useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import StoreContext from "../StoreContext";

const RoutesPrivate = ({component: Component, ...rest}) => {
    const {key} = useContext(StoreContext);

    return (
        <Route 
            {...rest}
            render= {() => key
                ? <Component {...rest}/>
                : <Redirect to= '/'/>
            }
            />
    )
}

export default RoutesPrivate;