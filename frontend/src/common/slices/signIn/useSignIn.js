import { useSelector, useDispatch } from 'react-redux';
import { signInInit as signInInitAction } from './actions';
import { getSignInLoading, getSignInError, getIsSignInSuccess } from './reducer';

function useSignIn() {
  const dispatch = useDispatch();
  const signInInit = (payload) => dispatch(signInInitAction(payload));
  const signInError = useSelector(getSignInError);
  const isSignInLoading = useSelector(getSignInLoading);
  const isSignInSuccess = useSelector(getIsSignInSuccess);
  return [
    {
      isLoading: isSignInLoading,
      signInError,
      signInInit,
      isSignInSuccess
    },
  ];
}

export default useSignIn;
