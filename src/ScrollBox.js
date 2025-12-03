const { Component } = require('react');

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    //const scrollHeight = this.box.scrollHeight; 와 같은 의미
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style1 = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style1}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
