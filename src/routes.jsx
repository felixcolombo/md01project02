import Map from './Pages/Map';
import Company from './Pages/Company';
import Product from './Pages/Product';
import Login from './Pages/Login';
import StoreUser from './components/StoreUser';
import RoutesPrivate from './components/RoutesPrivate';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const PagesRoot = () => {
    return(
        <Router>
            <StoreUser>
                <Switch>
                    <Route exact path='/' component={Login}/>

                    <RoutesPrivate path='/company' component={Company}/>

                    <RoutesPrivate path='/map' component={Map}/>

                    <RoutesPrivate path='/product' component={Product}/>
                    
                </Switch>
            </StoreUser>
        </Router>
    );
};

export default PagesRoot;
