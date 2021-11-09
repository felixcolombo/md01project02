import Map from './Pages/Map';
import Company from './Pages/Company';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/company' component={Company}/>

                <Route path='/map' component={Map}/>

            </Switch>
        </BrowserRouter>
    );
};

export default Router;
