import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import routes from "./routes"

const App = () => {
    return <BrowserRouter>
        <Switch>
            {routes.map((item, i) => (<Route path={item.path} component={item.component} key={i} exact />))}
        </Switch>
    </BrowserRouter>;
}

export default App;