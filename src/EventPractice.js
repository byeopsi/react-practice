import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this); // 자신을 잘 가리키기 위해 메서드를 지금 this와 바인딩 해주는 작업
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 메서드를 화살표 함수 방식으로 쓰면 바인딩 할 필요가 없다
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
