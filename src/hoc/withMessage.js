// Example cloud function call as HoC
import React from 'react';

import { helloWorld } from '../functions';

function withMessage(WrappedComponent) {
  return class HelloWorld extends React.Component {
    state = {};

    componentDidMount() {
      // TODO: cancel the setState if the component un-mounts before a response
      helloWorld().then(({ data }) => {
        this.setState({ message: data });
      }).catch(({ code, message, details }) => {
        // console.log(code, message, details);
      });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}

export default withMessage;
