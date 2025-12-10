import { Component } from 'react';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        {/* <MyComponent>프롭스.칠드런</MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />*/}
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        {/* <IterationSample /> */}
        <ErrorBoundary>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
