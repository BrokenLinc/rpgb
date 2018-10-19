import reduce from 'lodash/reduce';
import { withHandlers } from 'recompose';

const getFormValues = (form, fieldNames) => {
  return reduce(fieldNames, (result, fieldName) => {
    if (!form[fieldName]) return result;
    return {
      ...result,
      [fieldName]: form[fieldName].value,
    };
  }, {});
};

const withUpdateSnapshotOnSubmit = (fieldNames) => {
  return withHandlers({
    onSubmit: ({snapshot}) => (event) => {
      event.preventDefault();
      snapshot.ref.update(getFormValues(event.target, fieldNames));
    },
  });
};

export default withUpdateSnapshotOnSubmit;
