import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate() {
    if (this.props.history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
