import { Component } from 'react';

class ScrollToTop extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0,0);
    }
  }
  render() {
    return null;
  }
}

export default ScrollToTop;