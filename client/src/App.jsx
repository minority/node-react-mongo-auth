import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import routes from "./routes"

const App = () => {
    return <BrowserRouter>
        <Switch>
            {routes.map(item => (<Route path={item.path} component={item.component} exact />))}
        </Switch>
    </BrowserRouter>;
}

export default App;
