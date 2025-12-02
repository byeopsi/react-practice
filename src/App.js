import { Component } from 'react';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent>프롭스.칠드런</MyComponent>
        <Counter />
        <Say />
      </div>
    );
  }
}

export default App;
