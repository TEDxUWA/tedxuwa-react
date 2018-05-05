import { Component } from 'react';
import GA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
  GA.initialize('UA-117422701-2', {
    debug: false,
    titleCase: false,
  });
}

export default class Analytics extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      GA.pageview(nextProps.location.pathname);
    }
  }
  render() {
    return null;
  }
}