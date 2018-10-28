import { withRouter } from 'react-router';
import { compose, lifecycle, renderNothing } from 'recompose';

const ScrollToTop = compose(
  withRouter,
  lifecycle({
    componentDidUpdate() {
      if (this.props.history.action === 'PUSH') {
        window.scrollTo(0, 0);
      }
    }
  }),
  renderNothing,
)();

export default ScrollToTop;
