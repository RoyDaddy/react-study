import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    </div>
  );
}

export default App;
