import { Component } from 'react';

const isProd = process.env.NODE_ENV === 'production';

export default class Analytics extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (isProd) {
        window.analytics.page(this.props.location.pathname);
      }
    }
  }
  render() {
    return null;
  }
}
