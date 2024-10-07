import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Auth from './components/Auth';
import BusList from './components/BusList';
import BusDetails from './components/BusDetails';
import UserTickets from './components/UserTickets';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={BusList} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/buses/:id" component={BusDetails} />
                    <Route path="/tickets" component={UserTickets} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;