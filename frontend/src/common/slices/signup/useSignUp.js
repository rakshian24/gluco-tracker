import { useSelector, useDispatch } from 'react-redux';
import { signUpInit as signUpInitAction } from './actions';
import { getSignUpLoading, getSignUpError, getIsSignUpSuccess } from './reducer';

function useSignUp() {
  const dispatch = useDispatch();
  const signUpInit = (payload) => dispatch(signUpInitAction(payload));
  const signUpError = useSelector(getSignUpError);
  const isSignUpLoading = useSelector(getSignUpLoading);
  const isSignUpSuccess = useSelector(getIsSignUpSuccess);
  return [
    {
      isLoading: isSignUpLoading,
      signUpError,
      signUpInit,
      isSignUpSuccess
    },
  ];
}

export default useSignUp;
