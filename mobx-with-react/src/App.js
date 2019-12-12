import React, { Component } from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
import { withRouter, Switch, Route, Link } from 'react-router-dom';

@withRouter
class App extends Component {
  render() {
    return (
      <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Switch>
            <Route path="/about" component={Counter} />
            <Route path="/" component={SuperMarket} />
          </Switch>
    {/* <Counter />
        <hr />
        <SuperMarket /> */}
      </div>
    );
  }
}

export default App;