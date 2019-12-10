import React, { Component } from 'react';

import './App.css';

import WaitingList from './components/WaitingList';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WaitingListContainer from './containers/WaitingListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer /> {/* **** (2) 대체하기 */}
        <CounterContainer />
        <WaitingListContainer /> {/* **** 교체하기 */}
      </div>
    );
  }
}

export default App;
