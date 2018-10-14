const ACTIONS = {
  SIGNED_IN: 'user/signed-in',
  SIGNED_OUT: 'user/signed-out',
};

export const signedIn = (user) => ({ type: ACTIONS.SIGNED_IN, payload: { user } });
export const signedOut = () => ({ type: ACTIONS.SIGNED_OUT });

const reducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case ACTIONS.SIGNED_IN:
      return action.payload.user;
    case ACTIONS.SIGNED_OUT:
      return { };
    default:
      return state;
  }
};

export default reducer;
