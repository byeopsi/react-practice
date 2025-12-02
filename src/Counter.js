import { Component } from 'react';

class Counter extends Component {
  // 1. 컴포넌트에 state를 설정할 때는 이렇게 생성자를 통해 설정하거나
  // constructor(props) {
  //   super(props); // 필수 호출
  //   // 객체 형태로 state의 초기값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  // 2. 그냥 바로 설정해주기
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              alert('1점 오름!' + this.state.number);
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
