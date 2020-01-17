import React from 'react';
import Users from './users/index'
import Counter from './counter/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-5">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-800">Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/counter" className="text-white hover:text-gray-800">Counter</Link>
            </li>
            <li className="mr-6">
              <Link to="/users" className="text-white hover:text-gray-800">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
