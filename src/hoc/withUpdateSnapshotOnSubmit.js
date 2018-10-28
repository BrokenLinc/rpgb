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

const withUpdateSnapshotOnSubmit = (...fieldNames) => {
  return withHandlers({
    onSubmit: ({ collection, snapshot }) => (event) => {
      event.preventDefault();
      const data = getFormValues(event.target, fieldNames);
      if (snapshot) {
        snapshot.ref.update(data);
      } else if (collection) {
        // TODO: firestoreDatabase.collection('characters') => collection
        // collection.add(data);
      }
    },
  });
};

export default withUpdateSnapshotOnSubmit;
