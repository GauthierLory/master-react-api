import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";

require('../css/app.css');

console.log('Hello Webpack Encore !!!! Edit me in assets/js/app.js');

const App = () => {
    return (
        <HashRouter>
            <Navbar/>
            <main className="container">
                <Switch>
                    <Route path="/customers" component={CustomersPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </main>
        </HashRouter>
    )
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);

