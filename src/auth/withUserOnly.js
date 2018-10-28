import { branch, compose, renderNothing } from 'recompose';
import withUser from './withUser';

const withUserOnly = compose(
  withUser,
  branch(({ user }) => !user.isLoaded, renderNothing),
);

export default withUserOnly;
