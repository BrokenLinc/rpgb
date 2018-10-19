import { branch, renderComponent } from 'recompose';

import LoadingSpinner from '../components/LoadingSpinner';

export default branch(
  ({ isLoading }) => isLoading,
  renderComponent(LoadingSpinner),
);
