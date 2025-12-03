import { Component } from 'react';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyComponent>프롭스.칠드런</MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />*/}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
