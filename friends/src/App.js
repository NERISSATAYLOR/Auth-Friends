import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import FriendList from './components/FriendList';

function App() {
  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li> <Link to="/protected">Friends (**Protected Page**)</Link></li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />

          <Route path="/login" component={Login} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
