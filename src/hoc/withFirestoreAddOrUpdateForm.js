import reduce from 'lodash/reduce';
import { compose, getContext, withHandlers} from 'recompose';
import PropTypes from 'prop-types';

const getFormValues = (form, fieldNames) => reduce(fieldNames, (result, fieldName) => {
  if (!form[fieldName]) return result;
  return {
    ...result,
    [fieldName]: form[fieldName].value,
  };
}, {});

const withFirestoreAddOrUpdateForm = ({ collection: collectionName, fields: fieldNames }) => compose(
  getContext({ firestoreDatabase: PropTypes.object }),
  withHandlers({
    onSubmit: ({ firestoreDatabase, snapshot }) => (event) => {
      event.preventDefault();
      const data = getFormValues(event.target, fieldNames);
      if (snapshot) {
        snapshot.ref.update(data);
      } else {
        return firestoreDatabase.collection(collectionName).add(data);
      }
    },
  })
);

export default withFirestoreAddOrUpdateForm;
