import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject('dashboard')
@observer
class Form extends Component {
  @observable text = "";

  @action
  change = (e) =>{
    console.log(e);
  }

  render() {
    const {dashboard} = this.props;
    return (
      <div>
        <input type="text" onKeyPress={this.change()}/>
        <button onClick={dashboard.addTodo}>add</button>
      </div>
    );
  }
}

export default Form;