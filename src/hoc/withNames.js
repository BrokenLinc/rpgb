// Example cloud function call as HoC
import { compose, lifecycle, withHandlers, withState } from 'recompose';

import { generateFullNames } from '../functions';

const withNames = (nameCount) => compose(
  withState('names', 'setNames'),
  withHandlers({
    getNames: ({ setNames }) => () => {
      // TODO: cancel the setState if the component un-mounts before a response
      // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
      generateFullNames({ count: nameCount }).then(({ data }) => {
        setNames(data);
      }).catch(({ code, message, details }) => {
        // console.log(code, message, details);
      });
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getNames();
    }
  }),
);

export default withNames;
