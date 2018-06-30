import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardManager = () => (
    <div>
        <p>This is the ExpenseDashboardManager</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is the AddExpensePage</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>This is the EditExpensePage</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p>This is the HelpPage</p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>This is the NotFoundPage</p>
    </div>
);

const routes = (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={ExpenseDashboardManager} exact={true} />
        <Route path="/help" component={HelpPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>   
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
