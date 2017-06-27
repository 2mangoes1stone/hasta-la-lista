import React, { Component } from 'react';
import './App.css';
import Checkbox from './components/Checkbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hata la Lista </h1>
        <Checkbox label={ 'label!' } checked={ true } />
      </div>
    );
  }
}

export default App;
