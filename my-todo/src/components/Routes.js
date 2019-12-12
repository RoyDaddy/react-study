import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './todoList/Dashboard';

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/dashboard">TodoList</Link></li>
        <li><Link to="/calculator">ExchangeRate Calculator</Link></li>
      </ul>
    </div>
    <Route path="/dashboard" component={Dashboard} />
  </Router>
)