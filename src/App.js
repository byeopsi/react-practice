import { Component } from 'react';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyComponent>프롭스.칠드런</MyComponent>
        <Counter />
        <Say /> */}
        <EventPractice />
      </div>
    );
  }
}

export default App;
