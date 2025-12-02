import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
    favoriteNum: 0,
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNum, children } = this.props;
    return (
      <div>
        ㅎ2 이름은 {name}입니다. <br />
        칠드런 값은 {children}, 좋아하는 숫자는 {favoriteNum}입니다.
      </div>
    );
  }
}

export default MyComponent;
