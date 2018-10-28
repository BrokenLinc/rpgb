import { each, get } from 'lodash';
import { withProps } from 'recompose';

const withRouteParams = (...paramNames)  => {
  return withProps(({match}) => {
    const props = {};
    each(paramNames, (paramName) => {
      props[paramName] = get(match, 'params.characterKey');
    });
    return props;
  });
};

export default withRouteParams;
