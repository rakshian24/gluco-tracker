import { useSelector, useDispatch } from 'react-redux';
import { signOutInit as signOutInitAction } from './actions';
import { getSignOutLoading, getSignOutError, getIsSignOutSuccess } from './reducer';

function useSignOut() {
  const dispatch = useDispatch();
  const signOutInit = () => dispatch(signOutInitAction());
  const signOutError = useSelector(getSignOutError);
  const isSignOutLoading = useSelector(getSignOutLoading);
  const isSignOutSuccess = useSelector(getIsSignOutSuccess);
  return [
    {
      isLoading: isSignOutLoading,
      signOutError,
      signOutInit,
      isSignOutSuccess
    },
  ];
}

export default useSignOut;
